export const speakLetter = (letter: string) => {
  // Define a mapping of letters to words
  const letterWords: Record<string, string> = {
    A: "Apple",
    B: "Ball",
    C: "Cat",
    D: "Dog",
    E: "Elephant",
    F: "Fish",
    G: "Goat",
    H: "Hat",
    I: "Ice cream",
    J: "Jug",
    K: "Kite",
    L: "Lion",
    M: "Monkey",
    N: "Nest",
    O: "Orange",
    P: "Parrot",
    Q: "Queen",
    R: "Rabbit",
    S: "Sun",
    T: "Tiger",
    U: "Umbrella",
    V: "Violin",
    W: "Whale",
    X: "Xylophone",
    Y: "Yak",
    Z: "Zebra",
  };

  const word = letterWords[letter.toUpperCase()] || "Unknown";
  const upperLetter = letter.toUpperCase();

  // Function to create and configure utterance
  const createUtterance = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.45;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    utterance.lang = "en-US";
    return utterance;
  };

  // Function to set female voice and speak
  const speakWithFemaleVoice = (utterance: SpeechSynthesisUtterance) => {
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find((voice) =>
      ["female", "samantha", "zira", "google uk english female", "google us english"].some((keyword) =>
        voice.name.toLowerCase().includes(keyword)
      )
    );
    utterance.voice = femaleVoice || voices[0];
    window.speechSynthesis.speak(utterance);
  };

  // Speech sequence with delays
  const speakSequence = () => {
    let currentDelay = 0;
    const delayBetweenUtterances = 1200; // 1.2 seconds between phrases

    // First letter utterance
    setTimeout(() => {
      speakWithFemaleVoice(createUtterance(upperLetter));
    }, currentDelay);
    currentDelay += delayBetweenUtterances;

    // Second letter utterance
    setTimeout(() => {
      speakWithFemaleVoice(createUtterance(upperLetter));
    }, currentDelay);
    currentDelay += delayBetweenUtterances;

    // Third letter utterance
    setTimeout(() => {
      speakWithFemaleVoice(createUtterance(upperLetter));
    }, currentDelay);
    currentDelay += delayBetweenUtterances;

    // First letter-word combination
    setTimeout(() => {
      speakWithFemaleVoice(createUtterance(`${upperLetter} for ${word}`));
    }, currentDelay);
    currentDelay += delayBetweenUtterances;

    // Second letter-word combination
    setTimeout(() => {
      speakWithFemaleVoice(createUtterance(`${upperLetter} for ${word}`));
    }, currentDelay);
  };

  // Check if voices are loaded and start sequence
  if (window.speechSynthesis.getVoices().length > 0) {
    speakSequence();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      speakSequence();
    };
  }
};