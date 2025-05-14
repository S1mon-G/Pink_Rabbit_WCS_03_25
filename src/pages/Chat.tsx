import { useState } from "react";
import "./Chat.css";

import type { Message } from "../Interfaces/Message";
import type { Response } from "../Interfaces/Response";

const responses: Response[] = [
	{
		id: 1,
		text: "Salut ! Ça fait plaisir de te parler. Tu voudrais qu'on se voie bientôt ?",
	},
	{ id: 2, text: "Y'a un concert vendredi à l'Avant-Scène, ça te dit ?" },
	{ id: 3, text: "On peut se retrouver vers 19h ?" },
	{ id: 4, text: "Génial ! J'ai hâte de te voir. 😊" },
	{ id: 5, text: "A vendredi alors !" },
];

function Chat() {
	const [input, setInput] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [responseIndex, setResponseIndex] = useState(0);

	const sendMessage = () => {
		if (input.trim()) {
			const newMessage: Message = {
				id: Date.now(),
				user: "You",
				text: input,
			};
			setMessages([...messages, newMessage]);
			setInput("");

			setTimeout(() => {
				const response = responses[responseIndex];
				if (response) {
					const responseMessage: Message = {
						id: response.id,
						user: "Jeannine",
						text: response.text,
					};
					setMessages((prevMessages) => [...prevMessages, responseMessage]);
					setResponseIndex((prevIndex) => (prevIndex + 1) % responses.length);
				}
			}, 1500);
		}
	};

	const enterKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			sendMessage();
		}
	};

	return (
		<div className="chat">
			<div className="chat-response">
				{messages.map((msg) => (
					<div key={msg.id} className={`message ${msg.user}`}>
						{msg.text}
					</div>
				))}
			</div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={enterKeyPressed}
				className="chat-input"
				placeholder="Chat avec Jeannine..."
			/>
			<button type="button" onClick={sendMessage} className="chatpage-button">
				Envoyer
			</button>
		</div>
	);
}

export default Chat;
