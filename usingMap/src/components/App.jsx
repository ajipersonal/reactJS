import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createEmojiCard(emojipedia) {
  return (
    <Card
      id={emojipedia.id}
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
