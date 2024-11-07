describe('Hello World Letter Frequency', () => {
    it('Calculates the frequency of each letter', () => {
      const phrase = 'Hello World';
      const letterFrequency = {}; // Object to store letter counts
  
      // Clean the phrase: convert to lowercase and remove spaces
      const cleanedPhrase = phrase.toLowerCase().replace(/ /g, '');
  
      // Count the frequency of each letter
      for (let i = 0; i < cleanedPhrase.length; i++) {
        const letter = cleanedPhrase[i]; // Get the current letter
        
        // If the letter is already counted, increase its count
        if (letter in letterFrequency) {
          letterFrequency[letter]++;
        } else {
          letterFrequency[letter] = 1; // Start counting this letter
        }
      }
  
      // Log the frequency of each letter
      for (const letter in letterFrequency) {
        cy.log(`Letter: ${letter.toUpperCase()}, Frequency: ${letterFrequency[letter]}`);
      }
    });
  });
  