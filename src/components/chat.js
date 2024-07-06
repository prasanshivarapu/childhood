// // src/components/Chat.js
// import React, { useState, useEffect } from "react";
// import parseChat from "./parseChat";

// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchChat = async () => {
//             try {
//                 const parsedMessages = await parseChat();
//                 setMessages(parsedMessages);
//             } catch (err) {
//                 setError("Failed to parse chat file.");
//             }
//         };

//         fetchChat();
//     }, []);

//     return (
//         <div>
//             <h1>WhatsApp Chat</h1>
//             {error && <p>{error}</p>}
//             <div>
//                 {messages.map((msg, index) => (
//                     <div key={index} style={{ marginBottom: "10px" }}>
//                         <strong>{msg.sender}</strong> [{msg.date} ]:{" "}
//                         {msg.message}
//                     </div>
//                 ))}
//                 <h1>I miss you ra</h1>
//             </div>
//         </div>
//     );
// };

// export default Chat;

import React, { useState, useEffect } from "react";
import parseChat from "./parseChat";
import "../App.css"; // Import CSS for loading animation

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchChat = async () => {
            try {
                const parsedMessages = await parseChat();
                setMessages(parsedMessages);
                setIsLoading(false); // Set loading to false after fetching
            } catch (err) {
                setError("Failed to parse chat file.");
                setIsLoading(false); // Set loading to false on error
            }
        };

        fetchChat();
    }, []);

    return (
        <div>
            <h1>Hi sravani</h1>

            {/* Display loading animation while fetching */}
            {isLoading && <div className="loader"></div>}

            {/* Display error message if parsing fails */}
            {error && <p>{error}</p>}

            {/* Display messages when data is loaded */}
            {!isLoading && !error && (
                <div>
                    {messages.map((msg, index) => (
                        <div key={index} style={{ marginBottom: "10px" }}>
                            <strong>{msg.sender}</strong> [{msg.date} ]:{" "}
                            {msg.message}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Chat;
