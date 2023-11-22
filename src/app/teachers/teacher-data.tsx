interface Teacher {
  name: string;
  image: string;
  role: string;
  alt: string;
  bio: string;
}

export const teacher: Teacher = {
  name: 'Nate Mueller',
  image: '/images/Nate_Pic.jpg',
  role: 'Front End Engineer',
  alt: 'Nate in a blue shirt',
  bio: `Nate Mueller is the president and founder of Musicians Mobile. He
    has been teaching music at local schools throughout the Bay Area
    since 2002. In 2003, Nate chose to take his teaching directly to
    students by providing lessons in their own homes, providing an added
    convenience for both the parents and students. Outside of teaching
    music, Nate is a successful music producer. He has provided
    entertainment for brands such as the Golden State Warriors and the
    US Olympic Team. Additionally, his compositions have been licensed
    to ABC,VH1, MTV, and featured on the hit show Modern Family.`,
};

export const staff: Array<Teacher> = [
  {
    name: 'Nate Mueller',
    image: '/images/Nate_Pic.jpg',
    role: 'Front End Engineer',
    alt: 'Nate in a blue shirt',
    bio: `Nate Mueller is the president and founder of Musicians Mobile. He
      has been teaching music at local schools throughout the Bay Area
      since 2002. In 2003, Nate chose to take his teaching directly to
      students by providing lessons in their own homes, providing an added
      convenience for both the parents and students. Outside of teaching
      music, Nate is a successful music producer. He has provided
      entertainment for brands such as the Golden State Warriors and the
      US Olympic Team. Additionally, his compositions have been licensed
      to ABC,VH1, MTV, and featured on the hit show Modern Family.`,
  },
  {
    name: 'Monica Wildfong',
    image: '/images/MWildfong.jpeg',
    role: 'Account Administrator',
    alt: 'Lady smiling',
    bio: `Monica has a bachelor’s of science in accounting and worked in management, accounting, and marketing for 14 years before taking time off to raise her two children.  Monica loves traveling with her family and making custom cakes, as well as learning to play the piano.`,
  },
];
