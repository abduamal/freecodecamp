// Boiler:
  const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
// Challenge:
  // Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.
// Solution:
  const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      {/* This is a comment! */}
      <p>Here's a subtitle</p>
    </div>
  );
