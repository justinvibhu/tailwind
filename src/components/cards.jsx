import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg center">
      <img
        className="w-full h-64 object-cover transition duration-300 transform hover:scale-110"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};



const CardList = () => {
  const cards = [
    {
      title: "Birds",
      description: "Rescue and rehab pet birds, sometimes providing sanctuary.",
      imageSrc:"https://media.istockphoto.com/id/1470055677/photo/exotic-nicobar-pigeon.webp?b=1&s=170667a&w=0&k=20&c=dOJwllI79qPiNoK8FATRw4szlJpicVhVrdGRN_rgbpE="    },
    {
      title: "Cats",
      description: "Rescue, foster, and find homes for cats, including special cases.",
      imageSrc:"https://images.unsplash.com/photo-1599133718175-9c39750b8f2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsJTIwcmVzY3VlfGVufDB8fDB8fHww"    },
    {
      title: "Wildlife",
      description: "Rehabilitate and release injured or orphaned wild animals",
      imageSrc:
        "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww",
    },
    {
      title: "Dogs",
      description: "Rescue, rehabilitate, and rehome dogs from shelters, mills, abuse, or disasters.",
      imageSrc:
        "https://media.istockphoto.com/id/543600370/photo/little-puppies-in-the.webp?b=1&s=170667a&w=0&k=20&c=8szK5kOncfjiXRVyyr_H1y-RiUOKYQjrHcB4DlB6Rkg=",
    },
    {
      title: "Exotic Animals",
      description: "Rescue and rehome reptiles, amphibians, and exotic mammals.",
      imageSrc:
        "https://media.istockphoto.com/id/1000301206/photo/litter-of-puppies-in-animal-shelter-australian-shepherds.webp?b=1&s=170667a&w=0&k=20&c=ZTsvys_uXszBagIKmGE-9AtwpDhg2OOjHSiBG7XcB5c=",
    },
    {
      title: "Special Needs Animals",
      description: " Provide care for animals with medical or behavioral needs",
      imageSrc:
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldCUyMHJlc2N1ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Small Animals",
      description: "Care for abandoned small pets like rabbits, guinea pigs, and hamsters.",
      imageSrc:
        "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Big Animals",
        description: "Rescue and provide sanctuary for large animals such as elephants, big cats, bears etc",
        imageSrc:
          "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
