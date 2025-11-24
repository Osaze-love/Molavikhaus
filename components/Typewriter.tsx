"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
	strings: string[];
	autoStart?: boolean;
	loop?: boolean;
	delay?: number;
	cursor?: string;
	typingSpeed?: number;
	deletingSpeed?: number;
}

const Typewriter = ({
	strings,
	autoStart = true,
	loop = true,
	delay = 2000,
	cursor = "|",
	typingSpeed = 100,
	deletingSpeed = 50,
}: TypewriterProps) => {
	const [currentStringIndex, setCurrentStringIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [isStarted, setIsStarted] = useState(autoStart);

	useEffect(() => {
		if (!isStarted) return;

		const currentString = strings[currentStringIndex];
		let timeout: NodeJS.Timeout;

		if (!isDeleting && currentText.length < currentString.length) {
			// Typing
			timeout = setTimeout(() => {
				setCurrentText(currentString.slice(0, currentText.length + 1));
			}, typingSpeed);
		} else if (!isDeleting && currentText.length === currentString.length) {
			// Finished typing, wait before deleting
			timeout = setTimeout(() => {
				setIsDeleting(true);
			}, delay);
		} else if (isDeleting && currentText.length > 0) {
			// Deleting
			timeout = setTimeout(() => {
				setCurrentText(currentString.slice(0, currentText.length - 1));
			}, deletingSpeed);
		} else if (isDeleting && currentText.length === 0) {
			// Finished deleting, move to next string or loop
			setIsDeleting(false);
			if (loop) {
				setCurrentStringIndex(prev => (prev + 1) % strings.length);
			} else if (currentStringIndex < strings.length - 1) {
				setCurrentStringIndex(prev => prev + 1);
			}
		}

		return () => clearTimeout(timeout);
	}, [
		currentText,
		isDeleting,
		currentStringIndex,
		strings,
		delay,
		typingSpeed,
		deletingSpeed,
		loop,
		isStarted,
	]);

	return (
		<span>
			{currentText}
			<span className="animate-pulse">{cursor}</span>
		</span>
	);
};

export default Typewriter;
