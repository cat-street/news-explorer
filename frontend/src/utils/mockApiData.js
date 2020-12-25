const mockApiData = [
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Rina Herzl',
    title: 'Finally, Big Cats Are Closer to Getting the Protections They Need',
    description:
      'Currently, across the U.S., an estimated 20,000 big cats are privately kept as pets or as roadside zoo attractions, with many living in squalor cages and malnourished misery. They are beaten to succumb to performance. And some are even slaughtered or sold for…',
    url:
      'https://gizmodo.com/finally-big-cats-are-closer-to-getting-the-protections-1845813002',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/st731lxwzdfbbccrues5.jpg',
    publishedAt: '2020-12-05T00:00:00Z',
    content:
      'Currently, across the U.S., an estimated 20,000 big cats are privately kept as pets or as roadside zoo attractions, with many living in squalor cages and malnourished misery. They are beaten to succu… [+5021 chars]',
  },
  {
    source: {
      id: null,
      name: 'Lifehacker.com',
    },
    author: 'Stephen Johnson',
    title:
      "The Out-of-Touch Adults' Guide to Kids Culture: Teen Internet Is Different From Yours",
    description:
      'It might use the same technological architecture, but the internet of kids is a totally different place than the adult internet. Instead of infuriating political news, weight-loss apps, and Zoom meetings you have to go to even though the whole thing could hav…',
    url:
      'https://lifehacker.com/the-out-of-touch-adults-guide-to-kids-culture-teen-int-1845858743',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/iznmptvphgszazpcdfkz.jpg',
    publishedAt: '2020-12-11T15:30:00Z',
    content:
      'It might use the same technological architecture, but the internet of kids is a totally different place than the adult internet. Instead of infuriating political news, weight-loss apps, and Zoom meet… [+5195 chars]',
  },
  {
    source: {
      id: 'mashable',
      name: 'Mashable',
    },
    author: 'Jordan Aaron',
    title:
      "Cat lovers, you're going to want this litter box from the future – Future Blink",
    description:
      "Space Kotty, a futuristic litter box, claims to use algorithms based on veterinary knowledge to identify health issues from your cat's weight and, ummm, bathroom behavior.  Read more...More about Cats, Mashable Video, Kittens, Cat Lovers, and Litter Box",
    url: 'https://mashable.com/video/self-sanitizing-litter-box/',
    urlToImage:
      'https://mondrian.mashable.com/2020%252F12%252F17%252Fd8%252Fb54bb5b485b04c2ea0598f95eac9bb94.a4d5c.jpg%252F1200x630.jpg?signature=W-vU_Dw5mLHH1qA9X3lwj4QPD0k=',
    publishedAt: '2020-12-17T20:56:01Z',
    content:
      "Space Kotty, a futuristic litter box, claims to use algorithms based on veterinary knowledge to identify health issues from your cat's weight and, ummm, bathroom behavior.",
  },
  {
    source: {
      id: null,
      name: 'Lifehacker.com',
    },
    author: 'Mike Winters on Two Cents, shared by Mike Winters to Lifehacker',
    title: 'Can You Bring Your Emotional Support Animal on Your Next Flight?',
    description:
      'The era of emotional support squirrel on flights is over, as the Department of Transportation (DOT) ruled Wednesday that only dogs can be defined as service animals. Other animal companions used for emotional support will either have to be checked into the ca…',
    url:
      'https://twocents.lifehacker.com/can-you-bring-your-emotional-support-animal-on-your-nex-1845800941',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vajki5rnhobm0s5bxxxa.jpg',
    publishedAt: '2020-12-03T19:00:00Z',
    content:
      'The era of emotional support squirrel on flights is over, as the Department of Transportation (DOT) ruled Wednesday that only dogs can be defined as service animals. Other animal companions used for … [+2690 chars]',
  },
  {
    source: {
      id: 'techcrunch',
      name: 'TechCrunch',
    },
    author: 'Matt Burns',
    title:
      'Instead of Yule log, watch this interactive dumpster fire because 2020',
    description:
      'The holiday seasons is upon us and with that comes stress, anxiety, and the airing of grievances. And this year is worse. Instead of watching a yule log burn in a warm hearth, we’re all stuck in our homes watching the world burn. Instead of yelling into the v…',
    url:
      'http://techcrunch.com/2020/11/25/instead-of-yule-log-watch-this-interactive-dumpster-fire-because-2020/',
    urlToImage:
      'https://techcrunch.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-25-at-11.10.50-AM.png?w=725',
    publishedAt: '2020-11-25T16:23:28Z',
    content:
      'The holiday seasons is upon us and with that comes stress, anxiety, and the airing of grievances. And this year is worse. Instead of watching a yule log smolder in a warm hearth, were all stuck in ou… [+482 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Hyun Young Yi',
    title:
      'Rescue cats don Santa suits for purrfect Korean Christmas - Reuters',
    description:
      'What could be more endearing than a roomful of cats in red-and-white Santa costumes, each complete down to a hood with a white bobble and a belt?',
    url:
      'https://www.reuters.com/article/christmas-season-southkorea-cats-idUSKBN28P0BO',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201215&t=2&i=1544584086&r=LYNXMPEGBE06Q&w=800',
    publishedAt: '2020-12-15T04:14:00Z',
    content:
      'SEOUL (Reuters) - What could be more endearing than a roomful of cats in red-and-white Santa costumes, each complete down to a hood with a white bobble and a belt?\r\nAn employee dressed as a Santa Cla… [+1701 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Hyun Young Yi',
    title:
      'Rescue cats don Santa suits for purrfect Korean Christmas - Reuters India',
    description:
      'What could be more endearing than a roomful of cats in red-and-white Santa costumes, each complete down to a hood with a white bobble and a belt?',
    url:
      'https://in.reuters.com/article/christmas-season-southkorea-cats-idINKBN28P0CP',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201215&t=2&i=1544585387&r=LYNXMPEGBE07R&w=800',
    publishedAt: '2020-12-15T04:36:00Z',
    content:
      'SEOUL (Reuters) - What could be more endearing than a roomful of cats in red-and-white Santa costumes, each complete down to a hood with a white bobble and a belt?\r\nThis holiday season, come home to … [+1529 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Jorge Silva',
    title: 'For Thai artist, protests bring political awakening - Reuters UK',
    description:
      "Art portraying French revolutionaries replaced with cartoon cats and birds might not be controversial in many countries, but it is a potentially touchy subject for Thailand's monarchy.",
    url: 'https://uk.reuters.com/article/thailand-protests-art-idUKKBN28J0DV',
    urlToImage:
      'https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800',
    publishedAt: '2020-12-09T04:53:00Z',
    content:
      'BANGKOK (Reuters) - Art portraying French revolutionaries replaced with cartoon cats and birds might not be controversial in many countries, but it is a potentially touchy subject for Thailands monar… [+2616 chars]',
  },
  {
    source: {
      id: null,
      name: 'New York Times',
    },
    author: 'Jillian Steinhauer',
    title: '5 Art Accounts to Follow on Instagram Now',
    description:
      'Existential, fantastical, searching, and silly, these feeds help transport our critic while she’s stuck at home.',
    url:
      'https://www.nytimes.com/2020/12/16/arts/design/5-art-accounts-to-follow-on-instagram-now.html',
    urlToImage:
      'https://static01.nyt.com/images/2020/12/18/arts/16instagram-art-lead/16instagram-art-lead-facebookJumbo.jpg',
    publishedAt: '2020-12-16T15:00:12Z',
    content:
      'Before the pandemic, I wasnt exactly an art world jet-setter, but I did travel somewhat regularly. This year, being homebound for the better part of nine months has left me feeling loopy and itching … [+4331 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Yuddy Budiman Cahya',
    title:
      'From hijabs to cosplay, Indonesian finds calling in cat fashion makeovers - Reuters UK',
    description:
      'It may not be haute couture, but former Indonesian school teacher turned tailor Fredi Lugina Priadi has found a lucrative market for his cat fashions, creating unique costumes and cosplay outfits for cats.',
    url:
      'https://uk.reuters.com/article/uk-indonesia-cats-fashion-idUKKBN28C0D5',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201202&t=2&i=1543141671&r=LYNXMPEGB105I&w=800',
    publishedAt: '2020-12-02T04:59:00Z',
    content:
      'BOGOR, Indonesia (Reuters) - It may not be haute couture, but former Indonesian school teacher turned tailor Fredi Lugina Priadi has found a lucrative market for his cat fashions, creating unique cos… [+1771 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Yuddy Budiman Cahya',
    title:
      'From hijabs to cosplay, Indonesian finds calling in cat fashion makeovers - Reuters India',
    description:
      'It may not be haute couture, but former Indonesian school teacher turned tailor Fredi Lugina Priadi has found a lucrative market for his cat fashions, creating unique costumes and cosplay outfits for cats.',
    url:
      'https://in.reuters.com/article/us-indonesia-cats-fashion-idINKBN28C0CV',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201202&t=2&i=1543139231&r=LYNXMPEGB105Q&w=800',
    publishedAt: '2020-12-02T04:11:00Z',
    content:
      'BOGOR, Indonesia (Reuters) - It may not be haute couture, but former Indonesian school teacher turned tailor Fredi Lugina Priadi has found a lucrative market for his cat fashions, creating unique cos… [+1771 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Reuters Staff',
    title:
      'UK pets lose EU passports due to Brexit but can travel with conditions - Reuters UK',
    description:
      "British pets such as dogs, cats or ferrets will lose their current European Union passports after Britain leaves the EU's orbit on Dec. 31 and will have to be microchipped, vaccinated and have a special animal health certificate to travel.",
    url: 'https://uk.reuters.com/article/britain-eu-pets-idUKKBN28Q202',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201216&t=2&i=1544765106&r=LYNXMPEGBF12Z&w=800',
    publishedAt: '2020-12-16T14:36:00Z',
    content:
      'By Reuters Staff\r\nFILE PHOTO: A pet groomer tends to a dog at The Groom Room, at pets at home in Milton Keynes, following the outbreak of the coronavirus disease (COVID-19), Milton Keynes, Britain, J… [+1125 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Reuters Staff',
    title:
      'UK pets lose EU passports due to Brexit but can travel with conditions - Reuters UK',
    description:
      "British pets such as dogs, cats or ferrets will lose their current European Union passports after Britain leaves the EU's orbit on Dec. 31 and will have to be microchipped, vaccinated and have a special animal health certificate to travel.",
    url: 'https://uk.reuters.com/article/britain-eu-pets-idUKKBN28Q1Z1',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201216&t=2&i=1544765099&r=LYNXMPEGBF12R&w=800',
    publishedAt: '2020-12-16T14:32:00Z',
    content:
      'By Reuters Staff\r\nFILE PHOTO: A woman wearing a face mask carries a pet stroller in Washington Square park during the outbreak of the coronavirus disease (COVID-19) in New York City, U.S., April 19, … [+1116 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Yuddy Budiman Cahya',
    title:
      'From hijabs to cosplay, Indonesian finds calling in cat fashion makeovers - Reuters',
    description:
      'It may not be haute couture, but former Indonesian school teacher turned tailor Fredi Lugina Priadi has found a lucrative market for his cat fashions, creating unique costumes and cosplay outfits for cats.',
    url:
      'https://www.reuters.com/article/us-indonesia-cats-fashion-idUSKBN28C0CV',
    urlToImage:
      'https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800',
    publishedAt: '2020-12-02T04:08:00Z',
    content:
      'BOGOR, Indonesia (Reuters) - It may not be haute couture, but former Indonesian school teacher turned tailor Fredi Lugina Priadi has found a lucrative market for his cat fashions, creating unique cos… [+1771 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Reuters Staff',
    title:
      'British dogs and ferrets lose EU passports but can travel after Brexit - Reuters',
    description:
      "British pets such as dogs, cats or ferrets will lose their current European Union passports after Britain leaves the EU's orbit on Dec. 31 and will have to be microchipped, vaccinated and have a special animal health certificate to travel.",
    url: 'https://www.reuters.com/article/britain-eu-pets-idUSKBN28Q202',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201216&t=2&i=1544765106&r=LYNXMPEGBF12Z&w=800',
    publishedAt: '2020-12-16T14:35:00Z',
    content:
      'By Reuters Staff\r\nFILE PHOTO: A pet groomer tends to a dog at The Groom Room, at pets at home in Milton Keynes, following the outbreak of the coronavirus disease (COVID-19), Milton Keynes, Britain, J… [+1125 chars]',
  },
  {
    source: {
      id: null,
      name: 'Fubiz.net',
    },
    author: 'Pauline',
    title: 'Humans Matching with Cats',
    description:
      'The purpose of the game Do You Look Like Your Cat? is simple : match humans with cats. A funny way to revisit the famous memory game, with images signed by the photographer Gerrard Gethings, known for his animals’ pictures. After a first successful game Do Yo…',
    url: 'http://www.fubiz.net/en/2020/11/25/humans-matching-with-cats-2/',
    urlToImage:
      'http://www.fubiz.net/wp-content/uploads/2020/10/gerrardgethings-1-708x456.jpg',
    publishedAt: '2020-11-25T11:49:27Z',
    content: null,
  },
  {
    source: {
      id: null,
      name: 'New York Times',
    },
    author: 'Alyson Krueger',
    title: 'Still at Home for the Holidays',
    description:
      'Asked not to travel, many New Yorkers are looking to create new traditions. Some residential buildings are stepping into the void, and have already cued Santa and the jazz band.',
    url:
      'https://www.nytimes.com/2020/12/15/realestate/pandemic-winter-holidays.html',
    urlToImage:
      'https://static01.nyt.com/images/2020/12/16/realestate/16holidays1/16holidays1-facebookJumbo.jpg',
    publishedAt: '2020-12-15T13:00:10Z',
    content:
      'All tenants are being offered the opportunity to light Hanukkah candles together through a special Instagram Live service. The company is also organizing private, Covid-friendly visits from Santa for… [+1212 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Reuters Staff',
    title:
      'UK pets lose EU passports due to Brexit but can travel with conditions - Reuters India',
    description:
      'Pets such as dogs, cats or ferrets will be able to travel with their owners to the European Union from Britain after Dec. 31 if they are microchipped, vaccinated and have a special animal health certificate instead of the current EU pet passport.',
    url: 'https://in.reuters.com/article/britain-eu-pets-idINKBN28Q1Z1',
    urlToImage:
      'https://static.reuters.com/resources/r/?m=02&d=20201216&t=2&i=1544764048&r=LYNXMPEGBF12R&w=800',
    publishedAt: '2020-12-16T14:33:00Z',
    content:
      'By Reuters Staff\r\nFILE PHOTO: A woman wearing a face mask carries a pet stroller in Washington Square park during the outbreak of the coronavirus disease (COVID-19) in New York City, U.S., April 19, … [+652 chars]',
  },
  {
    source: {
      id: null,
      name: 'Design-milk.com',
    },
    author: 'Jaime Derringer',
    title: 'Take 5: I Can Haz Brutalism? Modern Music, Magic Carpets + More',
    description:
      'Founder + Chief Creative Officer, Jaime Derringer, takes the reins this week for our Take 5 series, and if you like cats + brutalism, you should read it.',
    url:
      'https://design-milk.com/take-5-cats-brutalism-interactive-exhibitions/',
    urlToImage:
      'https://design-milk.com/images/2020/11/teamlab-forest-installation.jpg',
    publishedAt: '2020-12-14T16:00:30Z',
    content:
      '1. I cant stop thinking about this Kusama-esque teamLab installation, Forest of Resonating Lamps, which was on my list of things to visit on our Japan trip that was cancelled due to COVID-19. Im stil… [+673 chars]',
  },
  {
    source: {
      id: null,
      name: 'New York Times',
    },
    author: 'Allyson Waller',
    title: 'A Cat Is Said to Be Joining the Bidens in the White House',
    description:
      'The last cat to live in the White House, India, belonged to President George W. Bush.',
    url:
      'https://www.nytimes.com/2020/11/28/us/Biden-cat-dogs-German-shepherd.html',
    urlToImage:
      'https://static01.nyt.com/images/2020/11/28/multimedia/28xp-biden-cat-photo/28xp-biden-cat-photo-facebookJumbo.jpg',
    publishedAt: '2020-11-29T00:35:41Z',
    content:
      'Jennifer Pickens, a White House historian and author of Pets at the White House: 50 Years of Presidents and Their Pets, said the emergence of the internet had added to Sockss popularity as a cartoon … [+1228 chars]',
  },
];

export default mockApiData;
