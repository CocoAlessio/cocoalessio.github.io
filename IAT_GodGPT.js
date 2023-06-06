define(['pipAPI', 'https://raw.githubusercontent.com/CocoAlessio/cocoalessio.github.io/main/DefineVariables'], function(APIConstructor, iatExtension) {
  var API = new APIConstructor();
  
  var GodWords = API.shuffle(['Omnipotent', 'Omniscient', 'Omnipresence', 'Savior', 'Supreme', 'Almighty', 'Holy spirit']);
  var DevilWords = API.shuffle(['Beelzebub', 'Lucifer', 'Satan', 'Demon', 'Sin', 'Evil', 'Hell']);

  return iatExtension({
    category1: {
      name: 'Black people',
      title: { media: { word: 'Black people' }, css: { color: '#31940F', 'font-size': '1.8em' }, height: 4 },
      stimulusMedia: [
        { image: 'bm1_nc.jpg' },
        { image: 'bm2_nc.jpg' },
        { image: 'bm3_nc.jpg' },
        { image: 'bf1_nc.jpg' },
        { image: 'bf2_nc.jpg' },
        { image: 'bf3_nc.jpg' }
      ],
      stimulusCss: { color: '#31940F', 'font-size': '2.3em' }
    },
    category2: {
      name: 'White people',
      title: { media: { word: 'White people' }, css: { color: '#31940F', 'font-size': '1.8em' }, height: 4 },
      stimulusMedia: [
        { image: 'yf1.jpg' },
        { image: 'yf4.jpg' },
        { image: 'yf5.jpg' },
        { image: 'ym2.jpg' },
        { image: 'ym3.jpg' },
        { image: 'ym5.jpg' }
      ],
      stimulusCss: { color: '#31940F', 'font-size': '2.3em' }
    },
    attribute1: {
      name: 'Devil',
      title: { media: { word: 'Devil' }, css: { color: '#0000FF', 'font-size': '1.8em' }, height: 4 },
      stimulusMedia: DevilWords.slice(0, 8).map(function(word) { return { word: word }; }),
      stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
    },
    attribute2: {
      name: 'God',
      title: { media: { word: 'God' }, css: { color: '#0000FF', 'font-size': '1.8em' }, height: 4 },
      stimulusMedia: GodWords.slice(0, 8).map(function(word) { return { word: word }; }),
      stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
    },
    base_url: {
      image: 'https://github.com/baranan/minno-tasks/tree/30c3f45df5b9ffd071fb952cb74f94671bdb2d48/docs/images'
    }
  });
});
