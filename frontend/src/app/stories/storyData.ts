// Types
export interface StorySection {
  title: string
  titleBengali?: string
  content: string
  bengaliCallout?: string
}

export interface Story {
  slug: string
  title: string
  titleBengali: string
  subtitle?: string
  deity: 'durga' | 'saraswati' | 'ganesh' | 'kartikeya'
  type: 'story' | 'article'
  description: string
  descriptionBengali: string
  moral?: string
  moralBengali?: string
  image?: string
  icon: string
  colorTheme: {
    gradient: string
    bg: string
    lightBg: string
    text: string
    accent: string
    border: string
  }
  sections: StorySection[]
  ageRange?: string
}

// Color themes per deity
export const deityThemes = {
  durga: {
    gradient: 'from-red-600 to-orange-600',
    bg: 'bg-red-600',
    lightBg: 'bg-red-50',
    text: 'text-red-700',
    accent: 'text-red-600',
    border: 'border-red-200',
  },
  saraswati: {
    gradient: 'from-yellow-500 to-amber-500',
    bg: 'bg-yellow-500',
    lightBg: 'bg-yellow-50',
    text: 'text-yellow-700',
    accent: 'text-yellow-600',
    border: 'border-yellow-200',
  },
  ganesh: {
    gradient: 'from-orange-500 to-amber-600',
    bg: 'bg-orange-500',
    lightBg: 'bg-orange-50',
    text: 'text-orange-700',
    accent: 'text-orange-600',
    border: 'border-orange-200',
  },
  kartikeya: {
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    text: 'text-blue-700',
    accent: 'text-blue-600',
    border: 'border-blue-200',
  },
} as const

// Deity section info for the listing page
export const deitySections = [
  {
    key: 'durga' as const,
    name: 'Durga',
    nameBengali: 'দুর্গা',
    icon: '🪔',
    description: 'The invincible warrior goddess who vanquishes evil and protects the righteous.',
    descriptionBengali: 'অজেয় যোদ্ধা দেবী যিনি অশুভকে বিনাশ করেন এবং ধার্মিকদের রক্ষা করেন।',
  },
  {
    key: 'saraswati' as const,
    name: 'Saraswati',
    nameBengali: 'সরস্বতী',
    icon: '📚',
    description: 'The serene goddess of knowledge, music, arts, and wisdom.',
    descriptionBengali: 'জ্ঞান, সংগীত, শিল্পকলা ও প্রজ্ঞার শান্ত দেবী।',
  },
  {
    key: 'ganesh' as const,
    name: 'Ganesh',
    nameBengali: 'গণেশ',
    icon: '🐘',
    description: 'The beloved elephant-headed god of beginnings, wisdom, and good fortune.',
    descriptionBengali: 'সূচনা, প্রজ্ঞা ও সৌভাগ্যের প্রিয় গজাননদেব।',
  },
  {
    key: 'kartikeya' as const,
    name: 'Kartikeya',
    nameBengali: 'কার্তিকেয়',
    icon: '🦚',
    description: 'The valiant god of war, youthful energy, and divine courage.',
    descriptionBengali: 'যুদ্ধের দেবতা, তারুণ্যের শক্তি ও দিব্য সাহসের প্রতীক।',
  },
]

// Children's stories (12)
export const childrenStories: Story[] = [
  // DURGA stories (3)
  {
    slug: 'mahishasur-bodh',
    title: 'The Slaying of Mahishasura',
    titleBengali: 'মহিষাসুর বধ',
    subtitle: 'How the mighty Durga defeated the buffalo demon',
    deity: 'durga',
    type: 'story',
    description: 'The thrilling tale of how Goddess Durga, created from the combined power of all the gods, fought and defeated the terrible buffalo demon Mahishasura in a battle that lasted nine days and nine nights.',
    descriptionBengali: 'সকল দেবতার সম্মিলিত শক্তিতে সৃষ্ট দেবী দুর্গা কীভাবে ভয়ংকর মহিষাসুরকে নয় দিন নয় রাতের যুদ্ধে পরাজিত করেছিলেন সেই রোমাঞ্চকর কাহিনী।',
    moral: 'When good people come together, no evil can stand against them. Courage and righteousness always triumph over tyranny.',
    moralBengali: 'যখন ভালো মানুষেরা একত্রিত হয়, কোনো অশুভ শক্তি তাদের সামনে দাঁড়াতে পারে না। সাহস ও ধর্ম সবসময় অত্যাচারের উপর জয়লাভ করে।',
    icon: '⚔️',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.durga,
    ageRange: '6-12',
    sections: [
      {
        title: 'The Unstoppable Demon',
        titleBengali: 'অদম্য দানব',
        content: 'Long, long ago, there lived a powerful buffalo demon named Mahishasura. He prayed for years and years to Lord Brahma, sitting perfectly still through scorching summers and freezing winters. Impressed by his devotion, Brahma appeared and granted him a wish. "Make me immortal!" begged Mahishasura. "No creature can be immortal," said Brahma, "but you may choose how you can be defeated." Cunning Mahishasura smiled and said, "Then let no man or god be able to defeat me!" He thought he was truly invincible now — for who else could possibly challenge him?\n\nWith his new power, Mahishasura attacked heaven itself. The gods fought bravely, but one by one they fell. Mahishasura drove them from their celestial home, and darkness spread across all three worlds — heaven, earth, and the netherworld. People suffered, crops withered, and even the sun seemed afraid to shine.',
        bengaliCallout: 'মহিষাসুর ভেবেছিল সে অজেয় — কিন্তু সে ভুলে গিয়েছিল যে "পুরুষ বা দেবতা" ছাড়াও কেউ থাকতে পারেন!',
      },
      {
        title: 'The Birth of the Goddess',
        titleBengali: 'দেবীর জন্ম',
        content: 'The defeated gods gathered together, desperate and worried. Then something magical happened. Fuelled by their righteous anger, a brilliant light burst from each god — a golden beam from Brahma, a blue flame from Vishnu, a silver fire from Shiva, and sparks of light from every single deity. These beams of light swirled together like a cosmic storm, growing brighter and brighter until a magnificent figure stepped forth — a beautiful, radiant woman with ten arms and eyes that blazed like stars. She was Durga, born from the united strength of all the gods combined.\n\nEach god gifted her their most powerful weapon. Shiva gave his mighty trident, Vishnu his spinning discus, Indra his thunderbolt, and the mountain god Himavan gave her a majestic lion to ride into battle. She was more powerful than any single god, because she carried all their strength within her.',
        bengaliCallout: 'দুর্গা কোনো একক দেবতা থেকে নয় — সকলের সম্মিলিত শক্তি থেকে জন্মগ্রহণ করেছিলেন। একতাই শক্তি!',
      },
      {
        title: 'Nine Days of Battle',
        titleBengali: 'নয় দিনের যুদ্ধ',
        content: 'When Mahishasura saw Durga, he laughed. "A woman? The gods send a woman to fight me?" But his laughter died when their weapons clashed and the earth itself shook. For nine days and nine nights, the most spectacular battle in history raged across the sky. Mahishasura used every trick he knew — he transformed into a roaring lion, a charging elephant, a giant serpent — but Durga matched him at every turn. Her lion roared back at his lion form. Her trident blocked his elephant charge. Her discus cut through his serpent coils.\n\nThe mountains trembled, the oceans surged, and lightning split the sky with each blow they exchanged.',
        bengaliCallout: 'মহিষাসুর বারবার রূপ বদলাল — সিংহ, হাতি, সাপ — কিন্তু দুর্গা প্রতিটি রূপে তাকে পরাজিত করলেন!',
      },
      {
        title: 'Victory on the Tenth Day',
        titleBengali: 'দশম দিনের বিজয়',
        content: 'On the tenth day, exhausted and desperate, Mahishasura returned to his true buffalo form for one final charge. With a thunderous bellow, he rushed at Durga. But the goddess was ready. She leapt from her lion onto the demon\'s back, pinning him beneath her foot. With one mighty thrust of her trident, she struck Mahishasura down forever.\n\nThe heavens erupted in celebration! The gods showered flowers from the sky, celestial musicians played victory songs, and all three worlds rejoiced. Light returned to every corner of creation. This glorious day of triumph is celebrated as Vijaya Dashami — the day that reminds us that no matter how dark things seem, good will always find a way to win.',
        bengaliCallout: 'বিজয়া দশমী — দশম দিনের বিজয়! এই দিনটিই আমরা দুর্গাপূজার শেষ দিনে উদযাপন করি।',
      },
    ],
  },
  {
    slug: 'umar-agomoni',
    title: "Uma's Homecoming",
    titleBengali: 'উমার আগমনী',
    subtitle: "The beautiful story of a daughter's visit home",
    deity: 'durga',
    type: 'story',
    description: "The tender story behind Durga Puja — how the goddess Uma (Durga) returns to her parents' home each autumn with her children, just like Bengali daughters visiting their families.",
    descriptionBengali: 'দুর্গাপূজার পেছনের হৃদয়স্পর্শী কাহিনী — দেবী উমা (দুর্গা) প্রতি শরতে সন্তানদের নিয়ে বাপের বাড়ি ফেরেন, ঠিক যেমন বাঙালি মেয়েরা বাড়ি ফেরেন।',
    moral: 'Family bonds are sacred. No matter how far we go, the love of home always calls us back.',
    moralBengali: 'পারিবারিক বন্ধন পবিত্র। আমরা যতই দূরে যাই, বাড়ির ভালোবাসা সবসময় আমাদের টেনে আনে।',
    icon: '🏠',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.durga,
    ageRange: '5-10',
    sections: [
      {
        title: "A Mother's Longing",
        titleBengali: 'এক মায়ের আকুলতা',
        content: "High up in the Himalayan mountains lived the goddess Parvati — also known as Uma — with her husband Lord Shiva and their children: the elephant-headed Ganesh, the brave warrior Kartikeya, and even Lakshmi and Saraswati who were part of the divine family. Uma's mother, Menaka, and father, the Mountain King Himavan, missed their daughter terribly. Every day, Menaka would look up at the distant snowy peaks and whisper, \"When will my Uma come home?\"\n\nIn those ancient days, just as today, married daughters would live with their husband's family. But the bond between a mother and daughter can never be broken by distance.",
        bengaliCallout: 'মেনকা প্রতিদিন হিমালয়ের চূড়ায় তাকিয়ে ভাবতেন — "আমার উমা কবে ঘরে ফিরবে?"',
      },
      {
        title: 'The Autumn Visit',
        titleBengali: 'শারদীয় আগমন',
        content: "Every autumn, when the skies turn bright and the kashful (white pampas grass) sways in the breeze, Uma would come down from Mount Kailash to visit her parents. And she wouldn't come alone — she'd bring her whole family! Little Ganesh with his love of sweets, brave Kartikeya on his peacock, and the family's animal companions too.\n\nMenaka would prepare for weeks — cleaning the house, cooking Uma's favourite dishes, buying new clothes for the grandchildren. The whole village would celebrate, because when Uma came home, joy and prosperity came with her. Drums would beat, conch shells would blow, and everyone would sing songs of welcome.",
        bengaliCallout: '"আশ্বিনের শারদ প্রাতে বেজে উঠে আলোক মঞ্জীরে" — শরতের সকালে আলোর নূপুর বেজে ওঠে উমার আগমনে!',
      },
      {
        title: 'Four Precious Days',
        titleBengali: 'চারটি মূল্যবান দিন',
        content: "Uma would stay for just four days — Saptami, Ashtami, Navami, and Dashami. Each day was filled with love, laughter, and celebration. Menaka would fuss over her daughter, making sure she ate well and rested. Himavan would sit proudly, watching his grandchildren play. The whole family would gather, share stories, and create memories that would last until the next visit.\n\nBut as with all visits, the time would fly by too quickly. On the fourth day, Dashami, it would be time for Uma to return to Kailash.",
        bengaliCallout: 'সপ্তমী, অষ্টমী, নবমী — প্রতিটি দিন আনন্দে ভরা। কিন্তু দশমী আসে বিদায়ের দিন হয়ে।',
      },
      {
        title: 'The Bittersweet Farewell',
        titleBengali: 'মিষ্টি-তেতো বিদায়',
        content: "On Vijaya Dashami, the day of farewell, every eye would fill with tears. Menaka would hold Uma close, not wanting to let go. \"Come back soon, my daughter,\" she would whisper. Uma would promise to return next year, and with her children beside her, she would begin the journey back to the mountains.\n\nThis is why, during the immersion ceremony (Bisarjan) on Dashami, Bengali women apply sindoor (vermilion) to the goddess and to each other, with tears and smiles both. It is a farewell to a beloved daughter, with the promise that she will return. And this is the beautiful heart of Durga Puja — it is not just about a goddess defeating a demon. It is about a daughter coming home, a mother's love, and the joy of family reunion. Every Bengali family sees their own story in Uma's homecoming.",
        bengaliCallout: 'এই জন্যই দশমীতে সিঁদুর খেলা হয় — উমাকে বিদায় জানানোর আবেগ আর পরের বছর ফিরে আসার প্রতিশ্রুতি।',
      },
    ],
  },
  {
    slug: 'durgar-dosh-ostro',
    title: 'How Durga Got Her Ten Weapons',
    titleBengali: 'দুর্গার দশ অস্ত্র',
    subtitle: 'The story of each divine weapon gifted by the gods',
    deity: 'durga',
    type: 'story',
    description: 'Discover the fascinating story behind each of the ten weapons that the gods gave to Durga — from Shiva\'s trident to Vishnu\'s discus — and what each one means.',
    descriptionBengali: 'দেবতারা দুর্গাকে যে দশটি অস্ত্র দিয়েছিলেন — শিবের ত্রিশূল থেকে বিষ্ণুর সুদর্শন চক্র — তার প্রতিটির আকর্ষণীয় কাহিনী ও অর্থ জানুন।',
    moral: 'Every person has unique gifts. When we share our strengths with others, together we become unstoppable.',
    moralBengali: 'প্রত্যেক মানুষের অনন্য প্রতিভা আছে। যখন আমরা নিজেদের শক্তি অন্যদের সাথে ভাগ করি, তখন একসাথে আমরা অজেয় হই।',
    icon: '🔱',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.durga,
    ageRange: '6-12',
    sections: [
      {
        title: 'The Gods Had a Problem',
        titleBengali: 'দেবতাদের সমস্যা',
        content: "After the demon Mahishasura drove all the gods from heaven, they realised something important: none of them alone was strong enough to defeat him. Not Brahma the creator, not Vishnu the preserver, not even mighty Shiva the destroyer. The demon had a blessing that no god or man could kill him. But what if they combined their powers into one being? What if they created someone entirely new?\n\nAnd so, from their united cosmic energy, Goddess Durga was born. But she would need weapons — the very best weapons from every god — to fight the mighty demon. One by one, each god stepped forward with their most prized possession.",
        bengaliCallout: 'একা কোনো দেবতা পারলেন না — তাই তাঁরা সিদ্ধান্ত নিলেন সবার শক্তি এক করবেন!',
      },
      {
        title: 'The Gifts of the Gods',
        titleBengali: 'দেবতাদের উপহার',
        content: "Lord Shiva stepped forward first and gave his trident (trishul) — the three-pointed spear that could pierce through any illusion and destroy any evil. \"With this,\" he said, \"you can conquer the three worlds.\"\n\nLord Vishnu spun his shining discus (sudarshana chakra) and sent it flying to Durga. This razor-sharp disc could cut through anything and always returned to its owner. \"This never misses its target,\" he promised.\n\nIndra, the king of gods, summoned a thunderstorm and pulled from it his thunderbolt (vajra) and his white elephant Airavata's bell. \"The power of lightning is now yours.\"\n\nVayu, the wind god, gave his bow and arrows that could fly faster than the wind itself. Agni, the fire god, gave a blazing spear that burned with eternal flame. Vishwakarma, the divine craftsman, gave her an unbreakable battle-axe and impenetrable armour. Himalaya gave his daughter a magnificent lion — fierce, loyal, and fearless — to be her mount in battle. Varuna gave the conch shell and a noose, and the Sun himself gave her his own rays, filling her with blinding radiance.",
        bengaliCallout: 'ত্রিশূল, চক্র, বজ্র, ধনুক, অগ্নিশূল, কুঠার, শঙ্খ, পাশ — প্রতিটি অস্ত্রের পেছনে একজন দেবতার ভালোবাসা!',
      },
      {
        title: 'More Than Just Weapons',
        titleBengali: 'শুধু অস্ত্র নয়',
        content: "But these were not ordinary weapons. Each one carried the love and hope of the god who gave it. The trident was not just a spear — it was Shiva's trust that good would triumph. The discus was not just a disc — it was Vishnu's promise that order would be restored. The thunderbolt was not just a weapon — it was Indra's prayer that heaven would be free again.\n\nWhen Durga held all ten weapons in her ten hands, she glowed with a light brighter than a thousand suns. She was not one god — she was ALL the gods. Their combined hope, courage, and power shone through her. The demons who saw her trembled, for they had never seen anything so powerful yet so beautiful.",
        bengaliCallout: 'প্রতিটি অস্ত্র একটি প্রতিশ্রুতি — ভালো অবশ্যই জিতবে!',
      },
      {
        title: 'The Lesson for Us',
        titleBengali: 'আমাদের জন্য শিক্ষা',
        content: "This is why we see Durga with ten arms — each holding a weapon given by a different god. It teaches us a beautiful lesson: nobody has to face their problems alone. Just as the gods shared their best gifts to create something greater than themselves, we too become stronger when we help each other.\n\nYour friend who is good at maths can help you study. Your sibling who is brave can hold your hand when you're scared. Your parent who is wise can guide you when you're confused. Each of us has a special gift — and when we share those gifts, we become as powerful as Durga herself.\n\nNext time you see a picture of Ma Durga with her ten weapons, remember — each weapon is a reminder that teamwork makes the impossible possible!",
        bengaliCallout: 'তুমিও তোমার বন্ধুদের সাথে নিজের বিশেষ প্রতিভা ভাগ করতে পারো — তাহলে তোমরাও দুর্গার মতো শক্তিশালী!',
      },
    ],
  },

  // SARASWATI stories (3)
  {
    slug: 'saraswatir-binadan',
    title: 'The Gift of Music and Speech',
    titleBengali: 'সরস্বতীর বীণাদান',
    subtitle: 'How Saraswati brought music and language to the world',
    deity: 'saraswati',
    type: 'story',
    description: 'The enchanting story of how Goddess Saraswati created music with her veena and gave the gift of speech to all living beings, bringing harmony and beauty to a silent universe.',
    descriptionBengali: 'দেবী সরস্বতী কীভাবে তাঁর বীণায় সংগীত সৃষ্টি করেছিলেন এবং সকল প্রাণীকে বাক্যশক্তি দান করেছিলেন সেই মোহনীয় কাহিনী।',
    moral: 'Words and music have the power to bring joy and understanding. Use your voice to spread kindness and beauty.',
    moralBengali: 'শব্দ ও সংগীতে আনন্দ ও বোঝাপড়া আনার শক্তি আছে। তোমার কণ্ঠকে দয়া ও সৌন্দর্য ছড়াতে ব্যবহার করো।',
    icon: '🎵',
    image: '/saraswatipooja-2025/20240218_113230.jpg',
    colorTheme: deityThemes.saraswati,
    ageRange: '5-10',
    sections: [
      {
        title: 'A World Without Sound',
        titleBengali: 'শব্দহীন পৃথিবী',
        content: "In the very beginning, when Lord Brahma created the world, something was missing. The rivers flowed silently. The wind blew without a whisper. The birds opened their beaks but no song came out. People moved their lips but could not speak. The world was beautiful to look at, but it was eerily quiet — like a painting that could never come alive.\n\nBrahma looked at his creation and felt sad. \"It's not enough to have beautiful mountains, rivers, and creatures,\" he thought. \"Without sound, without voice, without music — the world has no soul.\" He knew he needed something special, something magical, to complete his creation.",
        bengaliCallout: 'কল্পনা করো — নদী বয়ে যাচ্ছে কিন্তু কোনো শব্দ নেই, পাখিরা গান গাইতে পারছে না!',
      },
      {
        title: "Saraswati's Divine Music",
        titleBengali: 'সরস্বতীর দিব্য সংগীত',
        content: "Brahma closed his eyes and meditated deeply. From his creative energy, a radiant goddess appeared — Saraswati, dressed in pure white like fresh snow, sitting gracefully on a white lotus. In her hands she held a veena, a beautiful stringed instrument unlike anything that had ever existed.\n\nSaraswati smiled and placed her fingers on the veena's strings. The moment she began to play, something extraordinary happened. The first note rang out across the silent universe like a golden bell. Rivers suddenly began to gurgle and splash. The second note made the wind start to sing through the trees. The third note gave voice to the birds, who burst into joyful song. With each note she played, another sound was born into the world — the buzz of bees, the roar of waterfalls, the gentle patter of rain.",
        bengaliCallout: 'সরস্বতীর বীণার প্রথম সুরেই নদী কলকল করে উঠল, দ্বিতীয় সুরে বাতাস গাইতে শুরু করল!',
      },
      {
        title: 'The Gift of Speech',
        titleBengali: 'বাক্যদানের কাহিনী',
        content: "But Saraswati's greatest gift was yet to come. She played a special melody — soft and complex, like a mother's lullaby mixed with a scholar's wisdom. This melody floated into the hearts of every person on earth. Suddenly, a child said \"Ma!\" for the first time. A father called his son's name. Friends began to laugh and talk together. People could finally share their thoughts, feelings, and dreams with words.\n\nSaraswati then taught humans the alphabet — the sacred sounds that could be written down and preserved forever. With language came stories, with stories came knowledge, and with knowledge came wisdom. She gave humanity its greatest tool: the ability to communicate, to learn from each other, to pass down knowledge from grandparent to grandchild.",
        bengaliCallout: 'সরস্বতীই মানুষকে বর্ণমালা শিখিয়েছিলেন — যার জন্য আজ আমরা পড়তে, লিখতে ও গল্প বলতে পারি!',
      },
      {
        title: 'Music Lives On',
        titleBengali: 'সংগীত চিরন্তন',
        content: "This is why Saraswati is always shown with her veena — the instrument that first gave the world its voice. This is why, on Saraswati Puja, we place our books, pens, and musical instruments before her image. We thank her for the gift of knowledge and expression.\n\nEvery time you read a book, you are using Saraswati's gift. Every time you sing a song or speak kind words to a friend, you are channelling her blessing. And every time you learn something new — a new word, a new idea, a new tune — Saraswati smiles, because that is exactly what she created language and music for.\n\nSo the next time the world feels noisy, remember — it was once completely silent, and it was Saraswati who filled it with beautiful sound.",
        bengaliCallout: 'তুমি যখনই একটি বই পড়ো বা গান গাও, তুমি সরস্বতীর আশীর্বাদ ব্যবহার করছো!',
      },
    ],
  },
  {
    slug: 'hatekhari',
    title: 'The First Writing Lesson',
    titleBengali: 'হাতেখড়ি',
    subtitle: 'The sacred tradition of a child\'s first alphabet',
    deity: 'saraswati',
    type: 'story',
    description: 'The heartwarming story behind Hatekhari — the Bengali tradition where children write their first letters before Goddess Saraswati, beginning their lifelong journey of learning.',
    descriptionBengali: 'হাতেখড়ির পেছনের হৃদয়স্পর্শী কাহিনী — বাঙালি ঐতিহ্য যেখানে শিশুরা দেবী সরস্বতীর সামনে প্রথম অক্ষর লেখে, আজীবন শিক্ষার যাত্রা শুরু করে।',
    moral: 'Learning begins with a single letter. Every great scholar once held chalk for the very first time.',
    moralBengali: 'শিক্ষা শুরু হয় একটি মাত্র অক্ষর দিয়ে। প্রতিটি মহান পণ্ডিত একদিন প্রথমবার খড়ি ধরেছিলেন।',
    icon: '✍️',
    image: '/saraswatipooja-2025/20240218_113230.jpg',
    colorTheme: deityThemes.saraswati,
    ageRange: '4-9',
    sections: [
      {
        title: 'A Special Morning',
        titleBengali: 'একটি বিশেষ সকাল',
        content: "Little Riya woke up to the smell of marigolds and incense. Today was Saraswati Puja — and even more exciting, today was her Hatekhari! She was four years old, and this was the day she would write her very first letter.\n\n\"Wear your yellow dress, Riya!\" called her grandmother, Dida. Yellow was the special colour of Saraswati Puja — the colour of spring, of knowledge, of sunshine and new beginnings. Riya put on her bright yellow frock and felt like a little sunflower herself.",
        bengaliCallout: '"হলুদ পোশাক পরো, রিয়া!" — হলুদ হলো সরস্বতী পূজার বিশেষ রঙ, জ্ঞান ও বসন্তের রঙ।',
      },
      {
        title: 'Before the Goddess',
        titleBengali: 'দেবীর সামনে',
        content: "The pandal was beautiful. Goddess Saraswati's idol sat on a white lotus, wearing a white sari, holding her veena. Books and musical instruments were arranged at her feet — schoolbooks, pencils, even a tiny violin that belonged to Riya's older brother.\n\n\"Why do we put books there, Dida?\" asked Riya.\n\n\"Because Saraswati is the goddess of knowledge, my dear. Today we don't study from our books — we offer them to her and ask for her blessing. She will fill them with extra wisdom for us!\"\n\nRiya's eyes went wide. \"Will my new pencils become magic?\"\n\nDida laughed. \"In a way, yes. After Saraswati blesses them, every word you write will carry a little bit of her grace.\"",
        bengaliCallout: 'সরস্বতী পূজায় আমরা বই ও বাদ্যযন্ত্র দেবীর পায়ে রাখি — জ্ঞানের আশীর্বাদ প্রার্থনা করি।',
      },
      {
        title: 'The First Letters',
        titleBengali: 'প্রথম অক্ষর',
        content: "The moment arrived. Riya sat on her grandfather's lap before the image of Saraswati. Dadu placed a small slate in front of her and put a piece of chalk in her tiny hand.\n\n\"Hold my hand, Riya,\" said Dadu gently. Together, his large weathered hand guiding her small soft one, they drew the first letter: \"অ\" — the first letter of the Bengali alphabet. Then, on the other side, they wrote \"A\" — the first letter of the English alphabet.\n\nRiya stared at the white marks on the dark slate. She had made them! She had written something! It felt like the most important thing she had ever done.\n\nThe priest chanted mantras and placed a garland of flowers around her neck. Dida wiped happy tears from her eyes. Everyone clapped.",
        bengaliCallout: '"অ" — বাংলা বর্ণমালার প্রথম অক্ষর। এই একটি অক্ষর থেকেই শুরু হয় জ্ঞানের যাত্রা।',
      },
      {
        title: 'Every Journey Begins',
        titleBengali: 'প্রতিটি যাত্রার শুরু',
        content: "On the way home, Riya couldn't stop looking at her hands. These hands had written letters today! \"Dida, will I be able to read books like you?\"\n\n\"Of course, my love. Today you wrote your first letter. Tomorrow you'll learn more letters. Then words, then sentences, then whole stories! Every great poet, every scientist, every teacher — they all started exactly where you are today. With one little letter on a slate.\"\n\nRiya smiled and held Dida's hand tighter. She couldn't wait to learn more.\n\nThis is the beautiful tradition of Hatekhari — literally \"chalk in hand.\" For centuries, Bengali children have been introduced to the world of letters on Saraswati Puja, blessed by the Goddess of Knowledge herself. It reminds us that every long journey of learning begins with a single, precious first step.",
        bengaliCallout: 'হাতেখড়ি — \"হাতে খড়ি\"। শত শত বছর ধরে বাঙালি শিশুরা এভাবেই বিদ্যার জগতে প্রবেশ করেছে।',
      },
    ],
  },
  {
    slug: 'saraswati-o-ondhokar',
    title: "Saraswati's Light Against Darkness",
    titleBengali: 'সরস্বতী ও অন্ধকার',
    subtitle: 'How knowledge defeated the demon of ignorance',
    deity: 'saraswati',
    type: 'story',
    description: 'When the demon of ignorance cast the world into confusion and darkness, only Saraswati\'s wisdom and music could break his spell and restore light to all.',
    descriptionBengali: 'যখন অজ্ঞানতার দৈত্য পৃথিবীকে বিভ্রান্তি ও অন্ধকারে ডুবিয়ে দিল, একমাত্র সরস্বতীর জ্ঞান ও সংগীতই তার মায়া ভাঙতে ও আলো ফেরাতে পারল।',
    moral: 'Knowledge is the greatest light. Ignorance can be defeated not with weapons, but with wisdom and learning.',
    moralBengali: 'জ্ঞানই সর্বশ্রেষ্ঠ আলো। অজ্ঞানতাকে অস্ত্র দিয়ে নয়, প্রজ্ঞা ও শিক্ষা দিয়ে পরাজিত করা যায়।',
    icon: '💡',
    image: '/saraswatipooja-2025/20240218_113230.jpg',
    colorTheme: deityThemes.saraswati,
    ageRange: '6-12',
    sections: [
      {
        title: 'The Demon of Ignorance',
        titleBengali: 'অজ্ঞানতার দৈত্য',
        content: "There once was a demon unlike any other. He didn't have sharp claws or breathe fire. His name was Andhakasura — the Demon of Darkness — and his power was far more dangerous than physical strength. Wherever Andhakasura went, people forgot things. Teachers forgot how to teach. Farmers forgot how to plant crops. Musicians forgot their songs. Children forgot how to play and laugh.\n\nAndhakasura didn't need an army. His very presence was like a thick fog that crept into people's minds, erasing their knowledge and replacing it with confusion and fear. Schools shut down. Libraries crumbled. People argued because they couldn't understand each other anymore. The world sank into a grey, joyless haze.",
        bengaliCallout: 'অন্ধকাসুরের শক্তি ছিল সবচেয়ে ভয়ংকর — সে মানুষের মন থেকে জ্ঞান মুছে দিত!',
      },
      {
        title: 'No Weapon Could Help',
        titleBengali: 'কোনো অস্ত্রই কাজে আসেনি',
        content: "The gods tried to fight Andhakasura. Indra hurled his thunderbolt — but it passed right through the demon like lightning through fog. Vishnu threw his discus — but the demon simply dissolved and reformed. Shiva aimed his trident — but how do you stab darkness?\n\n\"You cannot defeat ignorance with force,\" said Lord Brahma wisely. \"A sword can cut a body, but only knowledge can cut through the darkness of the mind. We need Saraswati.\"\n\nThey called upon the goddess of wisdom. Saraswati arrived calmly, carrying not a single weapon — only her veena and a book of sacred knowledge.",
        bengaliCallout: 'বজ্র, চক্র, ত্রিশূল — কোনো অস্ত্রই কাজ করল না। কারণ অজ্ঞানতাকে অস্ত্র দিয়ে হারানো যায় না!',
      },
      {
        title: 'The Song of Wisdom',
        titleBengali: 'জ্ঞানের গান',
        content: "Saraswati sat down in the very heart of the darkness. Andhakasura laughed. \"What will you do, goddess? Play me a song?\"\n\n\"Yes,\" said Saraswati softly. \"That is exactly what I will do.\"\n\nShe began to play her veena. The first notes were gentle, like a sunrise. The melody carried within it the memory of every lesson ever taught, every story ever told, every lullaby ever sung to a child. As the music spread, something remarkable happened.\n\nA teacher suddenly remembered how to write. A farmer remembered the planting season. A child remembered the words to a song. Wherever the music reached, the fog of ignorance lifted. People began to think clearly again, to remember, to understand.\n\nAndhakasura writhed and shrank. \"Stop!\" he screamed. \"Knowledge is my enemy!\" With each note, he grew smaller. With each verse Saraswati recited from her book, he faded further. Finally, with one last brilliant chord, the demon dissolved completely — not destroyed, but banished to the shadows where ignorance always retreats when the light of knowledge appears.",
        bengaliCallout: 'সরস্বতীর বীণার সুরে মানুষ মনে করতে শুরু করল, অন্ধকাসুর ক্রমশ ছোট হয়ে মিলিয়ে গেল!',
      },
      {
        title: 'The Eternal Battle',
        titleBengali: 'চিরন্তন লড়াই',
        content: "But here is the important part of the story: Andhakasura was not killed. He was banished. He lurks in dark corners, waiting for people to stop learning, stop reading, stop asking questions. When we are lazy about studying, when we believe rumours without checking, when we stop being curious — that is when the demon of ignorance creeps back.\n\nThis is why Saraswati Puja is so important. Every year, we ask the Goddess of Knowledge to keep our minds bright and sharp. We place our books at her feet because books are our weapons against ignorance. We play music because harmony drives away confusion.\n\nRemember: every time you open a book, you push Andhakasura a little further away. Every time you learn something new, Saraswati's light shines a little brighter. The battle between knowledge and ignorance never ends — but as long as we keep learning, the light always wins.",
        bengaliCallout: 'তুমি যখনই একটি বই খোলো, তুমি অন্ধকাসুরকে একটু দূরে ঠেলে দাও। পড়তে থাকো, শিখতে থাকো!',
      },
    ],
  },

  // GANESH stories (3)
  {
    slug: 'ganesher-gajanon',
    title: 'How Ganesh Got His Elephant Head',
    titleBengali: 'গণেশের গজানন কাহিনী',
    subtitle: 'The famous story of the elephant-headed god',
    deity: 'ganesh',
    type: 'story',
    description: 'The beloved story of how young Ganesh was created by Parvati, guarded a door so bravely that even Lord Shiva couldn\'t pass, and received his elephant head.',
    descriptionBengali: 'পার্বতী কীভাবে গণেশকে সৃষ্টি করেছিলেন, গণেশ এত সাহসের সাথে দ্বার রক্ষা করেছিলেন যে শিবও প্রবেশ করতে পারেননি, এবং তিনি গজমস্তক পেয়েছিলেন সেই প্রিয় কাহিনী।',
    moral: 'True duty means standing firm, even when it\'s difficult. And love can always find a way to make things right.',
    moralBengali: 'প্রকৃত কর্তব্য মানে দৃঢ় থাকা, এমনকি যখন কঠিন হয়। এবং ভালোবাসা সবসময় সবকিছু ঠিক করার পথ খুঁজে নেয়।',
    icon: '🐘',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.ganesh,
    ageRange: '5-10',
    sections: [
      {
        title: "A Mother's Creation",
        titleBengali: 'মায়ের সৃষ্টি',
        content: "One day, Goddess Parvati wanted to take a bath, but Lord Shiva was away and there was no one to guard the door. She had an idea. She took some turmeric paste — the same golden paste used in sacred ceremonies — and moulded it into the figure of a beautiful boy. Then, breathing life into him, she said: \"You are my son. Guard this door and let no one enter until I say.\"\n\nThe boy sprang to life! He was strong, handsome, and absolutely devoted to his mother. He stood at the door like a little soldier, proud of his very first duty. He held a staff in his hands and his eyes were bright with determination.",
        bengaliCallout: 'পার্বতী হলুদের পেস্ট থেকে একটি সুন্দর ছেলে তৈরি করলেন এবং তাকে প্রাণ দিলেন — "তুমি আমার পুত্র!"',
      },
      {
        title: 'The Bravest Guard',
        titleBengali: 'সবচেয়ে সাহসী প্রহরী',
        content: "Soon, Lord Shiva returned home. But the boy at the door had never seen Shiva before — he only knew his mother's command. \"You cannot enter,\" he said firmly. \"My mother is bathing.\"\n\nShiva was surprised. \"But I live here! I am her husband!\" The boy didn't budge. \"I don't know you. My mother said no one enters.\"\n\nShiva grew angry. He sent his attendants, the Ganas, to remove the boy, but the brave child fought them all off single-handedly! Then Shiva sent great gods to persuade him, but the boy stood firm. No one — absolutely no one — was getting past him.\n\nFinally, in a terrible burst of rage, Shiva himself used his trident. The boy, loyal to the end, fell.",
        bengaliCallout: 'ছোট গণেশ একাই সমস্ত গণদের হারিয়ে দিলেন! কিন্তু শিবের ত্রিশূলের সামনে কেউ দাঁড়াতে পারে না।',
      },
      {
        title: 'A Father\'s Remorse',
        titleBengali: 'পিতার অনুশোচনা',
        content: "When Parvati came out and saw what had happened, her grief shook the entire universe. \"This was our son!\" she cried. \"The boy I created and loved! You must bring him back!\"\n\nShiva, now realising the terrible mistake, was filled with remorse. He promised to restore the boy. He sent his followers north with an instruction: \"Bring back the head of the first living creature you find sleeping with its head facing north.\"\n\nThey searched until they found a magnificent elephant sleeping peacefully. With great reverence, they brought the elephant's head to Shiva, who placed it on the boy's body and breathed new life into him. The boy opened his eyes — now with a kind, wise elephant face — and Parvati embraced him with tears of joy.",
        bengaliCallout: 'শিব হাতির মস্তক ছেলের দেহে স্থাপন করে প্রাণ দিলেন — গণেশ নতুন রূপে জেগে উঠলেন!',
      },
      {
        title: 'Ganesh, Lord of Beginnings',
        titleBengali: 'গণেশ, সূচনার দেবতা',
        content: "Shiva declared: \"From this day, this boy shall be called Ganesh — Lord of the Ganas. He will be worshipped first before any other god, before the start of any new endeavour. His bravery and devotion deserve the highest honour.\"\n\nAnd so it has been ever since. Before starting anything new — a journey, a business, a marriage, an exam — Hindus first pray to Ganesh. He is the remover of obstacles, the god of wisdom and new beginnings. His elephant head gives him the wisdom and memory of the elephant, the largest and wisest of animals.\n\nGanesh's story teaches us that true courage means standing up for what's right, even when it's hard. And that love — a parent's love — can overcome even the most terrible misfortune. Next time you see Ganesh's friendly elephant face, remember the brave little boy who stood his ground and earned the respect of all the gods.",
        bengaliCallout: 'গণেশ সকল দেবতার আগে পূজিত হন — কারণ তাঁর সাহস ও কর্তব্যনিষ্ঠা সর্বোচ্চ সম্মানের যোগ্য!',
      },
    ],
  },
  {
    slug: 'prithivi-prodokshin',
    title: 'The Race Around the World',
    titleBengali: 'পৃথিবী প্রদক্ষিণ',
    subtitle: 'How little Ganesh outsmarted everyone with love',
    deity: 'ganesh',
    type: 'story',
    description: 'When Shiva and Parvati set a challenge to race around the world, young Ganesh proved that the cleverest solution is sometimes the simplest — and that love is the centre of everything.',
    descriptionBengali: 'যখন শিব ও পার্বতী পৃথিবী প্রদক্ষিণের প্রতিযোগিতা দিলেন, ছোট্ট গণেশ প্রমাণ করলেন যে সবচেয়ে বুদ্ধিমান সমাধান মাঝে মাঝে সবচেয়ে সরল।',
    moral: 'True wisdom is not about strength or speed, but about understanding what truly matters. Parents are your whole world.',
    moralBengali: 'প্রকৃত প্রজ্ঞা শক্তি বা গতিতে নয়, সত্যিকারের গুরুত্বপূর্ণ বিষয় বোঝায়। বাবা-মা তোমার সমগ্র পৃথিবী।',
    icon: '🌍',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.ganesh,
    ageRange: '4-9',
    sections: [
      {
        title: 'The Challenge',
        titleBengali: 'চ্যালেঞ্জ',
        content: "One day, a rishi (sage) named Narada visited Mount Kailash carrying a golden mango — the most fragrant, most delicious mango in all of creation. \"This divine fruit,\" he announced with a mischievous smile, \"is for the most deserving of Shiva and Parvati's sons.\"\n\nGanesh and Kartikeya both wanted it. \"I should have it — I'm the elder!\" said the round-bellied Ganesh. \"No, I should — I'm faster and stronger!\" said the athletic Kartikeya. Before they could argue further, their parents spoke.\n\n\"Here is the challenge,\" said Shiva. \"Whoever goes around the world three times and returns here first shall win the mango.\"",
        bengaliCallout: 'নারদ মুনি একটি স্বর্গীয় আম নিয়ে এলেন — কে পাবে এই আম? পৃথিবী প্রদক্ষিণের প্রতিযোগিতা!',
      },
      {
        title: "Kartikeya's Swift Journey",
        titleBengali: 'কার্তিকেয়ের দ্রুত যাত্রা',
        content: "The moment the challenge was announced, Kartikeya leapt onto his peacock mount and soared into the sky like a comet. He was fast — incredibly fast. He flew over oceans and continents, past mountains and deserts, circling the globe with the speed of the wind itself.\n\nMeanwhile, Ganesh sat quietly on his little mouse mount, Mushak. Everyone looked at him with pity. Poor Ganesh — his mouse was tiny, and Ganesh himself was, well, not exactly built for racing. How could a boy on a mouse compete with a warrior on a peacock?\n\nBut Ganesh wasn't worried. He was thinking. And when Ganesh thought, wonderful things happened.",
        bengaliCallout: 'কার্তিকেয় ময়ূরে চড়ে ঝড়ের গতিতে উড়ে গেলেন। গণেশ বসে রইলেন — ভাবছিলেন!',
      },
      {
        title: "Ganesh's Brilliant Solution",
        titleBengali: 'গণেশের বুদ্ধিদীপ্ত সমাধান',
        content: "While Kartikeya was still flying over distant oceans, Ganesh calmly stood up. He walked over to his parents, Shiva and Parvati, who were sitting together on their throne. With a loving smile, Ganesh folded his hands in prayer — and then slowly, deliberately, he walked around his parents. Once. Twice. Three times.\n\nThen he sat down and said: \"I have completed the challenge.\"\n\nEveryone was confused. \"But you haven't gone around the world!\" they protested.\n\nGanesh smiled his wise, gentle smile. \"My mother and father ARE my world. The scriptures say that one's parents are the entire universe. By going around them, I have gone around the whole world — three times.\"",
        bengaliCallout: '"আমার মা-বাবাই আমার সমগ্র পৃথিবী!" — গণেশের উত্তরে সবাই মুগ্ধ হয়ে গেলেন।',
      },
      {
        title: 'Wisdom Wins',
        titleBengali: 'প্রজ্ঞার জয়',
        content: "Shiva and Parvati were deeply moved. Parvati's eyes glistened with tears of pride. Even the other gods nodded in admiration. Ganesh had not just found a clever loophole — he had expressed a profound truth. Our parents give us life, nurture us, and teach us everything we know. They truly are our whole world.\n\nWhen Kartikeya finally returned, exhausted from his three trips around the globe, he found Ganesh already enjoying the mango. At first he was upset — but even he had to admit that Ganesh's answer was beautiful.\n\nThis story is why Ganesh is called the God of Wisdom. Speed and strength are wonderful, but they can never beat true understanding. The next time you face a problem that seems impossible, think like Ganesh — sometimes the cleverest answer isn't the most complicated one. Sometimes it's right in front of you, sitting on a throne, smiling with love.",
        bengaliCallout: 'গতি ও শক্তি দারুণ, কিন্তু প্রকৃত বুদ্ধি সবসময় জেতে। গণেশের মতো ভাবো — সরল সমাধানই সেরা!',
      },
    ],
  },
  {
    slug: 'ganesher-mahabharot-lekha',
    title: 'Ganesh Writes the Mahabharata',
    titleBengali: 'গণেশের মহাভারত লেখা',
    subtitle: 'How the world\'s longest poem was written in one sitting',
    deity: 'ganesh',
    type: 'story',
    description: 'The fascinating story of how the sage Vyasa dictated the entire Mahabharata to Ganesh — who agreed to write it, but only if Vyasa never paused!',
    descriptionBengali: 'ঋষি ব্যাস কীভাবে সমগ্র মহাভারত গণেশকে বলেছিলেন — যিনি লিখতে রাজি হয়েছিলেন, তবে শর্ত ছিল ব্যাস কখনো থামবেন না!',
    moral: 'Great achievements require both speed and understanding. Never rush through something important without truly comprehending it.',
    moralBengali: 'মহান কৃতিত্বে গতি ও বোধ দুইই প্রয়োজন। গুরুত্বপূর্ণ কিছু সত্যিকার বুঝে না তাড়াহুড়ো করো না।',
    icon: '📝',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.ganesh,
    ageRange: '7-12',
    sections: [
      {
        title: "Vyasa's Great Problem",
        titleBengali: 'ব্যাসের বড় সমস্যা',
        content: "The sage Vyasa had composed the greatest poem the world would ever know — the Mahabharata, with one hundred thousand verses telling the story of kings, warriors, gods, and the great war between the Pandavas and Kauravas. But there was a problem: the entire epic existed only in Vyasa's mind. If something happened to him before he could share it, the world's greatest story would be lost forever.\n\nHe needed someone to write it down as he dictated — someone fast enough to keep up with his words, and wise enough to understand every nuance of the complex tale. He needed a scribe like no other.\n\nVyasa meditated and asked Lord Brahma for help. Brahma smiled and said: \"There is only one being in all of creation who can do this — Lord Ganesh.\"",
        bengaliCallout: 'এক লক্ষ শ্লোকের মহাভারত ব্যাসের মনে ছিল — কিন্তু লেখার জন্য দরকার ছিল বিশেষ কারো!',
      },
      {
        title: "Ganesh's Clever Condition",
        titleBengali: 'গণেশের চতুর শর্ত',
        content: "When Ganesh agreed to be the scribe, he set a condition that made everyone gasp: \"I will write without stopping,\" he said. \"But you must never pause. The moment you stop dictating, I will put down my pen and walk away, and the Mahabharata will remain unfinished.\"\n\nThis was a terrifying condition! How could Vyasa speak non-stop for the time it would take to recite one hundred thousand verses?\n\nBut the wise sage had his own trick. \"Very well,\" said Vyasa with a smile. \"But YOU must understand every word before you write it.\"\n\nNow it was Ganesh who was challenged. This meant he couldn't just scribble mindlessly — he had to comprehend the deep meaning of each verse before putting it to paper.",
        bengaliCallout: 'গণেশ বললেন: "থামবেন না!" ব্যাস বললেন: "বুঝে লিখতে হবে!" — দুজনের চতুর শর্ত!',
      },
      {
        title: 'The Great Writing',
        titleBengali: 'মহা লিখন',
        content: "And so they began. Vyasa spoke and Ganesh wrote at lightning speed, his pen (some say he broke off one of his own tusks to use as a pen!) flying across the pages. The story flowed like a great river — tales of honour and betrayal, of love and war, of duty and sacrifice.\n\nWhenever Ganesh wrote too fast, Vyasa would introduce an especially complex philosophical verse — one so deep that even Ganesh had to pause to understand it. During that pause, Vyasa would compose the next several verses in his mind.\n\nWhenever Vyasa needed a moment to think, those tricky verses gave him time. It was like a perfect game of chess between two brilliant minds — each one testing the other, both growing greater through the challenge.\n\nThey wrote through days and nights, through changing seasons, never stopping, never resting.",
        bengaliCallout: 'গণেশ তাঁর নিজের দাঁত ভেঙে কলম বানিয়েছিলেন বলে কথিত আছে! এই জন্য গণেশকে "একদন্ত" বলা হয়।',
      },
      {
        title: 'The Masterpiece Complete',
        titleBengali: 'মহাকীর্তি সম্পূর্ণ',
        content: "When the last verse was finally spoken and written, the Mahabharata was complete — the longest poem in human history, seven times longer than the Iliad and Odyssey combined. It contained everything: history, philosophy, love, war, ethics, and the famous Bhagavad Gita, the Song of God.\n\nGanesh put down his pen (or tusk!) and smiled. His hand ached but his heart was full. He had not just transcribed words — he had understood each one. And Vyasa had not just dictated — he had been inspired to create even greater depths of meaning by Ganesh's condition.\n\nThis is why Ganesh is also the patron god of writers and scholars. He teaches us that true learning isn't just about speed — it's about understanding. And the story of the Mahabharata's writing teaches us that great things happen when two brilliant people push each other to be their best.",
        bengaliCallout: 'মহাভারত মানব ইতিহাসের দীর্ঘতম কবিতা — আর গণেশ ছিলেন এর লেখক! বিদ্যা ও বোধের শক্তি!',
      },
    ],
  },

  // KARTIKEYA stories (3)
  {
    slug: 'kartikayer-jonmo',
    title: 'Birth of Kartikeya',
    titleBengali: 'কার্তিকেয়ের জন্ম',
    subtitle: 'The divine child raised by six mothers',
    deity: 'kartikeya',
    type: 'story',
    description: 'The miraculous story of how Kartikeya was born from divine fire, raised by six celestial mothers (the Krittikas), and grew up to lead the gods\' army against the forces of evil.',
    descriptionBengali: 'কার্তিকেয় কীভাবে দিব্য আগুন থেকে জন্মগ্রহণ করেছিলেন, ছয় স্বর্গীয় মাতা (কৃত্তিকা) দ্বারা লালিত-পালিত হয়েছিলেন এবং দেবসেনার নায়ক হয়েছিলেন সেই অলৌকিক কাহিনী।',
    moral: 'It takes a village to raise a child. Love can come from many sources, and every caring person in your life is a blessing.',
    moralBengali: 'একটি শিশু লালন-পালনে সকলের ভালোবাসা লাগে। ভালোবাসা অনেক উৎস থেকে আসতে পারে।',
    icon: '⭐',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.kartikeya,
    ageRange: '6-12',
    sections: [
      {
        title: 'A Dangerous Threat',
        titleBengali: 'একটি ভয়ংকর হুমকি',
        content: "A terrible demon named Tarakasura had conquered the three worlds. Like Mahishasura before him, he had earned a blessing through penance — but his was even more specific: only the son of Lord Shiva could defeat him. And since Shiva was deep in meditation, grieving the loss of his first wife Sati, Tarakasura believed he was safe forever.\n\n\"Shiva will never have a son!\" he laughed. \"He meditates eternally. I am invincible!\" The demon's cruelty grew worse by the day. The gods, saints, and innocent people suffered terribly under his rule.",
        bengaliCallout: 'তারকাসুরকে শুধুমাত্র শিবের পুত্রই বধ করতে পারবেন — কিন্তু শিব তো ধ্যানে মগ্ন!',
      },
      {
        title: 'Born from Sacred Fire',
        titleBengali: 'পবিত্র আগুন থেকে জন্ম',
        content: "After many adventures (including Parvati winning Shiva's heart, which is a beautiful story for another day!), a miraculous child was born — but not in an ordinary way. Shiva's divine energy was so powerful that no ordinary being could hold it. It passed through Agni, the fire god, then into the sacred river Ganga, and finally came to rest in a thicket of reeds.\n\nThere, the divine spark transformed into the most beautiful baby anyone had ever seen. He glowed with golden light, and even as a newborn, his eyes sparkled with courage and intelligence. Six stars — the Krittikas (known as the Pleiades in the Western world) — came down from the sky in the form of six gentle women. Each one wanted to hold the baby, each one wanted to be his mother.\n\nA miracle happened: the baby split into six forms, one for each mother to hold and nurse! Later, Parvati embraced all six, and they merged back into one extraordinary child with six faces. This is why he is called Shanmukha — the six-faced one, and Kartikeya — son of the Krittikas.",
        bengaliCallout: 'ছয়টি কৃত্তিকা তারকা মা হয়ে এলেন, শিশু ছয় রূপ নিলেন — তাই তাঁর নাম কার্তিকেয়, ষণ্মুখ!',
      },
      {
        title: 'The Young Commander',
        titleBengali: 'তরুণ সেনাপতি',
        content: "Kartikeya grew at a magical pace. Within days he went from a baby to a strong, radiant youth — tall, handsome, and burning with righteous energy. The gods saw in him their salvation and named him Commander of the Divine Army (Deva Senapati).\n\nImagine: a youth, barely grown, being given command of the entire celestial army! But there was something in Kartikeya's eyes — a fierce determination, a natural authority — that made every god and every soldier trust him completely. He rode a magnificent peacock, carried an invincible spear called Vel, and wore armour that shone like the sun.\n\nWhen Tarakasura heard that Shiva finally had a son, his arrogance turned to fear. But it was too late to run.",
        bengaliCallout: 'কার্তিকেয় হলেন দেবসেনাপতি — সমগ্র দেবতাদের সেনাবাহিনীর নেতা! তাঁর অস্ত্র — অজেয় বেল!',
      },
      {
        title: 'Victory and Grace',
        titleBengali: 'বিজয় ও কৃপা',
        content: "The battle between Kartikeya and Tarakasura was fierce and glorious. The young god fought with the skill of a veteran warrior and the energy of youth. His Vel spear flew true, piercing through the demon's defences. When Tarakasura finally fell, the universe breathed a sigh of relief.\n\nBut Kartikeya's story teaches us more than just victory in battle. Born from the combined forces of fire, water, and earth, raised by six loving mothers and both Shiva and Parvati — he shows us that it takes many forms of love to raise a great person. Your parents, grandparents, teachers, aunts, uncles — everyone who cares for you helps shape who you become.\n\nIn Bengali culture, Kartikeya is celebrated as the eternally youthful, handsome, and brave son who stands beside his mother Durga during Durga Puja — along with his brother Ganesh, and Lakshmi and Saraswati. Together, they form the divine family that every Bengali family sees as a reflection of their own.",
        bengaliCallout: 'দুর্গাপূজায় মায়ের পাশে দাঁড়ানো কার্তিকেয় — সাহসী, সুন্দর, চিরতরুণ। তাঁকে দেখলে মনে হয় আমাদেরই পরিবার!',
      },
    ],
  },
  {
    slug: 'kartiker-moyur-bahon',
    title: 'How Kartikeya Got His Peacock',
    titleBengali: 'কার্তিকের ময়ূর-বাহন',
    subtitle: 'The story of a fierce enemy who became a loyal friend',
    deity: 'kartikeya',
    type: 'story',
    description: 'The surprising tale of how a dangerous demon bird was transformed into the magnificent peacock that became Kartikeya\'s loyal mount — proving that even enemies can become friends.',
    descriptionBengali: 'একটি বিপজ্জনক দৈত্য পাখি কীভাবে রূপান্তরিত হয়ে কার্তিকেয়ের বিশ্বস্ত ময়ূর-বাহন হয়েছিল সেই বিস্ময়কর কাহিনী।',
    moral: 'Forgiveness and compassion can transform enemies into friends. True strength is shown not in destroying, but in transforming.',
    moralBengali: 'ক্ষমা ও করুণা শত্রুকে বন্ধুতে রূপান্তরিত করতে পারে। প্রকৃত শক্তি ধ্বংসে নয়, রূপান্তরে।',
    icon: '🦚',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.kartikeya,
    ageRange: '5-10',
    sections: [
      {
        title: 'The Terrible Surapadma',
        titleBengali: 'ভয়ানক সূরপদ্মা',
        content: "After defeating Tarakasura, Kartikeya faced another demon — Surapadma, who was even more cunning. When Surapadma realised he could not defeat Kartikeya in battle, he used his dark magic to transform into different creatures, trying to escape or trick the young god.\n\nFirst he became a giant tree, hoping to hide. Kartikeya's Vel spear split the tree in two. Then Surapadma transformed into a massive, terrifying bird — dark as a thundercloud, with wings that blocked out the sun. He flew at Kartikeya with razor-sharp talons, screeching with rage.\n\nThe cosmic bird was fearsome — bigger than any creature anyone had seen, with feathers like blades and eyes like burning coals.",
        bengaliCallout: 'সূরপদ্মা বিশাল ভয়ংকর পাখিতে রূপ নিল — ডানা মেলে সূর্য ঢেকে দিল!',
      },
      {
        title: 'The Vel Strikes',
        titleBengali: 'বেলের আঘাত',
        content: "Kartikeya stood calm as the monstrous bird attacked. He raised his Vel spear — the weapon of pure divine light — and threw it with perfect aim. The spear didn't just hit the bird; it transformed it. The dark, evil energy was split apart by the spear's divine light.\n\nWhere the halves of the demon bird fell, something magical happened. One half transformed into a magnificent peacock — its dark feathers now shimmering with iridescent blue and green, its tail displaying a thousand jewelled eyes. The rage in its heart was replaced by grace. The hatred was washed away by beauty.\n\nThe other half became a rooster, proud and bright, which would later become the symbol on Kartikeya's battle flag.",
        bengaliCallout: 'বেলের দিব্য আলো দৈত্য পাখিকে রূপান্তরিত করল — অন্ধকার থেকে জন্ম নিল সবচেয়ে সুন্দর পাখি!',
      },
      {
        title: 'From Enemy to Friend',
        titleBengali: 'শত্রু থেকে বন্ধু',
        content: "The newly-born peacock looked up at Kartikeya with different eyes now — not hatred, but gratitude. The divine spear hadn't just defeated the demon; it had freed the beauty trapped inside the evil. The peacock knelt before Kartikeya as if to say, \"Thank you for freeing me from darkness.\"\n\nKartikeya didn't push the peacock away or treat it with suspicion. Instead, he smiled and gently stroked its brilliant feathers. \"You were once my enemy,\" he said softly, \"but now you shall be my closest companion.\" He mounted the peacock, and from that day forward, they were inseparable.\n\nThe peacock carried Kartikeya with pride, its beautiful tail fanned out like a jewelled throne, its steps graceful and sure. Where once it had screamed in rage, now it danced with joy.",
        bengaliCallout: 'কার্তিকেয় প্রাক্তন শত্রুকে বন্ধু বানালেন — "তুমি একদিন শত্রু ছিলে, আজ থেকে তুমি আমার সবচেয়ে কাছের সঙ্গী।"',
      },
      {
        title: 'The Beautiful Lesson',
        titleBengali: 'সুন্দর শিক্ষা',
        content: "This is why you always see Kartikeya riding a peacock. And this story has a wonderful lesson for all of us.\n\nKartikeya could have simply destroyed the demon. No one would have blamed him — the demon was evil and dangerous. But instead, Kartikeya's divine power transformed evil into beauty. He showed that the greatest victory isn't destroying your enemy — it's transforming them.\n\nThink about it: the peacock — one of the most beautiful birds in all of creation — was born from a demon. Sometimes the people who seem most difficult, most angry, most frightening, have beauty inside them that's just waiting to be freed.\n\nAnd forgiveness? Kartikeya didn't hold a grudge. He didn't say, \"You were my enemy, so I can never trust you.\" He gave the peacock a chance to be something new and wonderful. That is true strength — not the power to destroy, but the grace to transform and forgive.",
        bengaliCallout: 'সবচেয়ে বড় বিজয় শত্রু ধ্বংস করা নয় — শত্রুকে রূপান্তরিত করা। ময়ূরের মতো, সকলের ভেতরে সৌন্দর্য আছে!',
      },
    ],
  },
  {
    slug: 'gonesh-kartik-bibad',
    title: 'The Great Sibling Rivalry',
    titleBengali: 'গণেশ-কার্তিক বিবাদ',
    subtitle: 'When two brothers competed to marry first',
    deity: 'kartikeya',
    type: 'story',
    description: 'The entertaining story of the rivalry between Ganesh and Kartikeya over who would marry first — featuring a race, a clever trick, and a lesson about wisdom versus speed.',
    descriptionBengali: 'কে আগে বিয়ে করবে তা নিয়ে গণেশ ও কার্তিকের মজার প্রতিদ্বন্দ্বিতার গল্প — একটি দৌড়, একটি চতুর কৌশল, এবং প্রজ্ঞা বনাম গতির শিক্ষা।',
    moral: 'Siblings may compete, but love holds the family together. Wisdom and strength both have their place.',
    moralBengali: 'ভাই-বোনে প্রতিযোগিতা হতে পারে, কিন্তু ভালোবাসাই পরিবারকে একত্রে রাখে। প্রজ্ঞা ও শক্তি দুটোরই মূল্য আছে।',
    icon: '👬',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.kartikeya,
    ageRange: '6-12',
    sections: [
      {
        title: 'Who Marries First?',
        titleBengali: 'কে আগে বিয়ে করবে?',
        content: "On Mount Kailash, in the divine household of Shiva and Parvati, a problem arose that every family can understand: both sons wanted to get married, and both thought they should go first!\n\nKartikeya, the handsome warrior, said: \"I am the firstborn! I should naturally marry first.\" (In some versions of the story, Kartikeya is the elder, in others Ganesh is — the gods themselves seem to disagree on this!)\n\nGanesh, the wise elephant-headed brother, said: \"Age is just a number, brother. What matters is who is more deserving.\"\n\nShiva and Parvati sighed — this argument had been going on for days. Finally, Shiva proposed the same challenge as before: \"Race around the world. The one who returns first shall marry first.\"",
        bengaliCallout: '"আমি আগে!" "না, আমি আগে!" — শিব আর পার্বতী দুই ছেলের ঝগড়ায় ক্লান্ত হয়ে প্রতিযোগিতা দিলেন!',
      },
      {
        title: 'The Race Begins Again',
        titleBengali: 'আবার দৌড় শুরু',
        content: "Once again, Kartikeya shot off on his peacock like a streak of blue-green lightning. He had learned nothing from the mango incident — or perhaps he thought the same trick wouldn't work twice.\n\nGanesh watched his brother disappear into the horizon, then calmly turned to his parents. \"The scriptures say that one's parents are the whole world,\" he said. And once again, he walked around Shiva and Parvati three times with loving devotion.\n\nBut this time there was a twist. Shiva, wanting to teach both sons a lesson, had invited the sages Vishwakarma's daughters, Siddhi (Success) and Buddhi (Intelligence), to be present. When Ganesh completed his circumambulation of his parents, Shiva declared him the winner — and his marriage to Siddhi and Buddhi was performed right there and then!",
        bengaliCallout: 'গণেশ আবারও মা-বাবাকে প্রদক্ষিণ করলেন — এবং এবার পুরস্কার ছিল সিদ্ধি ও বুদ্ধির সাথে বিবাহ!',
      },
      {
        title: "Kartikeya's Hurt",
        titleBengali: 'কার্তিকেয়ের কষ্ট',
        content: "When Kartikeya returned from his exhausting journey around the world, he found not only that Ganesh had won (again!) but that his brother was already married. He was furious and deeply hurt.\n\n\"This isn't fair!\" he cried. \"He didn't really go around the world! I did the actual work!\"\n\nIn his anger, Kartikeya left Mount Kailash. He flew south to a mountain called Palani (in what is now Tamil Nadu in southern India) and declared that he would live there alone, away from his family. He shaved his head and gave up all his royal possessions.\n\nWhen Parvati heard this, her heart broke. She rushed to see her son.",
        bengaliCallout: 'কার্তিকেয় রাগ করে কৈলাস ছেড়ে দক্ষিণে চলে গেলেন — "এটা ন্যায্য নয়!" তিনি বললেন।',
      },
      {
        title: 'Love Heals Everything',
        titleBengali: 'ভালোবাসা সব সারিয়ে তোলে',
        content: "Parvati found Kartikeya on his lonely mountain. \"My son,\" she said gently, \"your anger is understandable. You feel it was unfair. But think about it — Ganesh's wisdom and your strength are both needed in this world. He won with cleverness; you would win in any test of courage or battle. You are both special in different ways.\"\n\nKartikeya looked at his mother and felt his anger melting. She was right. Ganesh was wise, and he was brave — they were different, not better or worse.\n\nIn time, the brothers reconciled. Today, during Durga Puja, you can see them standing side by side with their mother — Ganesh on her right and Kartikeya on her left. They are different in every way: Ganesh round and gentle, Kartikeya tall and fierce. But they stand together as a family.\n\nThis story reminds us that siblings will always compete — and that's okay! Brothers and sisters push each other to be better. What matters is that when the competition ends, love remains. Your brother or sister may be completely different from you — but that difference makes your family stronger, not weaker.",
        bengaliCallout: 'দুর্গাপূজায় মায়ের দুপাশে গণেশ ও কার্তিকেয় — ভিন্ন, কিন্তু একসাথে। পরিবারের ভালোবাসা সবকিছুর ঊর্ধ্বে!',
      },
    ],
  },
]

// Existing articles (3) — metadata only, pages already exist
export const articles: Story[] = [
  {
    slug: 'durga-slays-mahishasura',
    title: 'The Legend of Durga Slaying Mahishasura',
    titleBengali: 'দুর্গার মহিষাসুর বধের কাহিনী',
    deity: 'durga',
    type: 'article',
    description: 'The epic story of how Goddess Durga, born from the combined powers of all the gods, defeated the invincible buffalo demon Mahishasura and restored cosmic order.',
    descriptionBengali: 'দেবতাদের সম্মিলিত শক্তিতে জন্ম নেওয়া দেবী দুর্গা কীভাবে অজেয় মহিষাসুরকে পরাজিত করে মহাজাগতিক শৃঙ্খলা পুনরুদ্ধার করেছিলেন।',
    icon: '🪔',
    image: '/Durgapooja-2025/durga-pooja.jpg',
    colorTheme: deityThemes.durga,
    sections: [],
  },
  {
    slug: 'kali-mata',
    title: 'Kali Mata: The Dark Mother',
    titleBengali: 'কালী মাতা: তমসানাশিনী জননী',
    deity: 'durga',
    type: 'article',
    description: 'Discover the fierce and compassionate Goddess Kali — the destroyer of evil, the liberator of souls, and one of the most powerful manifestations of Shakti.',
    descriptionBengali: 'ভয়ংকরী ও করুণাময়ী দেবী কালীকে জানুন — অশুভের বিনাশকারিণী, আত্মার মুক্তিদাত্রী এবং শক্তির অন্যতম শক্তিশালী প্রকাশ।',
    icon: '🕉️',
    image: '/kalipooja-2025/kaalipooja-2025.jpeg',
    colorTheme: { ...deityThemes.durga, gradient: 'from-purple-500 to-pink-500', text: 'text-purple-700', accent: 'text-purple-600' },
    sections: [],
  },
  {
    slug: 'goddess-saraswati',
    title: 'Goddess Saraswati: Divine Knowledge',
    titleBengali: 'দেবী সরস্বতী: দিব্য জ্ঞানের আলো',
    deity: 'saraswati',
    type: 'article',
    description: "The serene goddess who presides over knowledge, music, arts, and wisdom — learn about Saraswati's timeless significance and her special place in Bengali culture.",
    descriptionBengali: 'জ্ঞান, সংগীত, শিল্পকলা ও প্রজ্ঞার অধিষ্ঠাত্রী শান্ত দেবী — সরস্বতীর চিরন্তন তাৎপর্য এবং বাঙালি সংস্কৃতিতে তাঁর বিশেষ স্থান।',
    icon: '📚',
    image: '/saraswatipooja-2025/20240218_113230.jpg',
    colorTheme: deityThemes.saraswati,
    sections: [],
  },
]

// Helpers
export function getStoriesByDeity(deity: Story['deity']): Story[] {
  return childrenStories.filter((s) => s.deity === deity)
}

export function getAllContent(): Story[] {
  return [...childrenStories, ...articles]
}

export function getStoryBySlug(slug: string): Story | undefined {
  return childrenStories.find((s) => s.slug === slug)
}

export function getRelatedStories(story: Story): Story[] {
  return childrenStories.filter((s) => s.deity === story.deity && s.slug !== story.slug)
}

export function getAdjacentStories(slug: string): { prev: Story | null; next: Story | null } {
  const idx = childrenStories.findIndex((s) => s.slug === slug)
  return {
    prev: idx > 0 ? childrenStories[idx - 1] : null,
    next: idx < childrenStories.length - 1 ? childrenStories[idx + 1] : null,
  }
}
