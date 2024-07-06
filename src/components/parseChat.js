// src/utils/parseChat.js
import JSZip from "jszip";

const parseChat = async () => {
    try {
        const response = await fetch("/whatsapp.zip");
        const blob = await response.blob();
        const zip = await JSZip.loadAsync(blob);

        // Find the text file within the zip (assuming there's only one text file)
        const chatFileName = Object.keys(zip.files).find((name) =>
            name.endsWith(".txt"),
        );
        const chatText = await zip.file(chatFileName).async("text");

        // Parse the chat text into messages
        const messages = chatText
            .split("\n")
            .map((line) => {
                const [dateTime, ...rest] = line.split(" - ");
                if (rest.length === 0) return null; // Skip lines without a sender and message
                const [sender, message] = rest.join(" - ").split(": ");
                if (!message) return null; // Skip lines without a proper message

                // Handle cases where messages contain ': ' in the message body
                const messageParts = message.split(": ");
                if (messageParts.length > 1) {
                    sender = `${sender}: ${messageParts[0]}`;
                    message = messageParts.slice(1).join(": ");
                }

                const [date, time] = dateTime.split(", ");
                return { date, time, sender, message };
            })
            .filter(Boolean); // Filter out null values

        return messages;
    } catch (error) {
        console.error("Error parsing chat file:", error);
        return [];
    }
};

export default parseChat;
