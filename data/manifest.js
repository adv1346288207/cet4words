// Vocabulary registry. Add a new word list by:
//   1. dropping a data/<id>.js file that calls registerVocab('<id>', [...])
//   2. adding one entry below.
window.VOCAB_MANIFEST = [
  { id: 'cet4_1000', name: '四级 1000 高频词', file: 'data/cet4_1000.js', hasFreq: true  },
  { id: 'cet4_1500', name: '四级 1500 核心词', file: 'data/cet4_1500.js', hasFreq: false },
  { id: 'cet6',      name: '六级 1000 高频词', file: 'data/cet6.js',      hasFreq: true  },
  { id: 'ielts',     name: '雅思阅读 538 考点词', file: 'data/ielts.js',  hasFreq: false, hasCat: true, hasSyn: true },
  { id: 'ielts_yu',  name: '雅思词汇 俞敏洪乱序版 (3399词)', file: 'data/ielts_yu.js', hasFreq: false, hasSyn: true, hasWL: true, wlLabel: 'List' },
  { id: 'awl',       name: '学术词表 AWL (570词)', file: 'data/awl.js', hasFreq: false, hasWL: true, wlLabel: 'Sub' },
  { id: 'kaoyan',    name: '考研英语单词 (5308词)', file: 'data/kaoyan.js', hasFreq: false, hasWL: true, wlLabel: '单元' },
  { id: 'para',      name: '雅思 词句改写 & 同义替换', file: 'data/para.js', isPara: true },
];
