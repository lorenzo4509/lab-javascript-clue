// Suspects Array
const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: 'He is a well-connected entrepreneur with questionable ethics.',
      image: 'image_url_jacob_green.jpg',
      color: 'green'
    },
    {
      firstName: 'Doctor',
      lastName: 'Orchid',
      occupation: 'Biologist',
      age: 32,
      description: 'She is a PhD-educated biologist with a dangerous temper.',
      image: 'image_url_doctor_orchid.jpg',
      color: 'white'
    },
    {
      firstName: 'Victor',
      lastName: 'Plum',
      occupation: 'Video Game Designer',
      age: 28,
      description: 'He is a young video game designer with a knack for electronics.',
      image: 'image_url_victor_plum.jpg',
      color: 'purple'
    },
    // Add the other suspects here
  ];
  
  // Weapons Array
  const weaponsArray = [
    { name: 'Rope', weight: 1 },
    { name: 'Knife', weight: 0.5 },
    { name: 'Candlestick', weight: 3 },
    { name: 'Dumbbell', weight: 10 },
    { name: 'Poison', weight: 0.1 },
    { name: 'Axe', weight: 7 },
    { name: 'Bat', weight: 2 },
    { name: 'Trophy', weight: 5 },
    { name: 'Pistol', weight: 2.5 }
  ];
  
  // Rooms Array
  const roomsArray = [
    { name: 'Hall' },
    { name: 'Lounge' },
    { name: 'Dining Room' },
    { name: 'Kitchen' },
    { name: 'Ballroom' },
    { name: 'Conservatory' },
    { name: 'Billiard Room' },
    { name: 'Library' },
    { name: 'Study' },
    // Add the other rooms here
  ];
  
  // Function to select a random element from an array
  function selectRandom(array) {
    if (array.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // Function to pick a random suspect, weapon, and room to create the mystery
  function pickMystery() {
    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);
  
    return {
      suspect,
      weapon,
      room
    };
  }
  
  // Function to reveal the mystery in the specified format
  function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    const message = `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
    return message;
  }
  
  // Example usage
  const mystery = pickMystery();
  const message = revealMystery(mystery);
  console.log(message);
  