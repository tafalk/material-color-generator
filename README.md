# tafalk/material-color-generator

[![GitHub license](https://img.shields.io/github/license/tafalk/material-color-generator)](https://github.com/tafalk/material-color-generator/blob/master/LICENSE)
![build](https://github.com/tafalk/material-color-generator/workflows/Publish/badge.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@tafalk/material-color-generator)

Idempotently matches given string to a material color.

*Light* and *dark* classification is applied regarding the color chart [here](https://material-ui.com/customization/color/): If the text color is black for a background, it is considered as a *light* one; and if white, it is *dark*.

## Install

```sh
npm install @tafalk/material-color-generator
```

And use it in your code like:

```js
import { GetColor } from '@tafalk/material-color-generator'
const color = GetColor('my string', 'dark'); // -> something like 'ffffff'
```

## Possibilities

`GetColor` function matches one of the colors below and returns the RGB code.
| Light                                                                  | Dark                                                                   |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![#ffebee](https://via.placeholder.com/15/ffebee/000000/?text=+) ffebee | ![#ef5350](https://via.placeholder.com/15/ef5350/000000/?text=+) ef5350 |
| ![#ffcdd2](https://via.placeholder.com/15/ffcdd2/000000/?text=+) ffcdd2 | ![#f44336](https://via.placeholder.com/15/f44336/000000/?text=+) f44336 |
| ![#ef9a9a](https://via.placeholder.com/15/ef9a9a/000000/?text=+) ef9a9a | ![#e53935](https://via.placeholder.com/15/e53935/000000/?text=+) e53935 |
| ![#e57373](https://via.placeholder.com/15/e57373/000000/?text=+) e57373 | ![#d32f2f](https://via.placeholder.com/15/d32f2f/000000/?text=+) d32f2f |
| ![#fce4ec](https://via.placeholder.com/15/fce4ec/000000/?text=+) fce4ec | ![#c62828](https://via.placeholder.com/15/c62828/000000/?text=+) c62828 |
| ![#f8bbd0](https://via.placeholder.com/15/f8bbd0/000000/?text=+) f8bbd0 | ![#b71c1c](https://via.placeholder.com/15/b71c1c/000000/?text=+) b71c1c |
| ![#f48fb1](https://via.placeholder.com/15/f48fb1/000000/?text=+) f48fb1 | ![#f06292](https://via.placeholder.com/15/f06292/000000/?text=+) f06292 |
| ![#f3e5f5](https://via.placeholder.com/15/f3e5f5/000000/?text=+) f3e5f5 | ![#ec407a](https://via.placeholder.com/15/ec407a/000000/?text=+) ec407a |
| ![#e1bee7](https://via.placeholder.com/15/e1bee7/000000/?text=+) e1bee7 | ![#e91e63](https://via.placeholder.com/15/e91e63/000000/?text=+) e91e63 |
| ![#ce93d8](https://via.placeholder.com/15/ce93d8/000000/?text=+) ce93d8 | ![#d81b60](https://via.placeholder.com/15/d81b60/000000/?text=+) d81b60 |
| ![#ede7f6](https://via.placeholder.com/15/ede7f6/000000/?text=+) ede7f6 | ![#c2185b](https://via.placeholder.com/15/c2185b/000000/?text=+) c2185b |
| ![#d1c4e9](https://via.placeholder.com/15/d1c4e9/000000/?text=+) d1c4e9 | ![#ad1457](https://via.placeholder.com/15/ad1457/000000/?text=+) ad1457 |
| ![#b39ddb](https://via.placeholder.com/15/b39ddb/000000/?text=+) b39ddb | ![#880e4f](https://via.placeholder.com/15/880e4f/000000/?text=+) 880e4f |
| ![#e8eaf6](https://via.placeholder.com/15/e8eaf6/000000/?text=+) e8eaf6 | ![#ba68c8](https://via.placeholder.com/15/ba68c8/000000/?text=+) ba68c8 |
| ![#c5cae9](https://via.placeholder.com/15/c5cae9/000000/?text=+) c5cae9 | ![#9c27b0](https://via.placeholder.com/15/9c27b0/000000/?text=+) 9c27b0 |
| ![#9fa8da](https://via.placeholder.com/15/9fa8da/000000/?text=+) 9fa8da | ![#8e24aa](https://via.placeholder.com/15/8e24aa/000000/?text=+) 8e24aa |
| ![#e3f2fd](https://via.placeholder.com/15/e3f2fd/000000/?text=+) e3f2fd | ![#7b1fa2](https://via.placeholder.com/15/7b1fa2/000000/?text=+) 7b1fa2 |
| ![#bbdefb](https://via.placeholder.com/15/bbdefb/000000/?text=+) bbdefb | ![#6a1b9a](https://via.placeholder.com/15/6a1b9a/000000/?text=+) 6a1b9a |
| ![#90caf9](https://via.placeholder.com/15/90caf9/000000/?text=+) 90caf9 | ![#4a148c](https://via.placeholder.com/15/4a148c/000000/?text=+) 4a148c |
| ![#64b5f6](https://via.placeholder.com/15/64b5f6/000000/?text=+) 64b5f6 | ![#9575cd](https://via.placeholder.com/15/9575cd/000000/?text=+) 9575cd |
| ![#42a5f5](https://via.placeholder.com/15/42a5f5/000000/?text=+) 42a5f5 | ![#7e57c2](https://via.placeholder.com/15/7e57c2/000000/?text=+) 7e57c2 |
| ![#e1f5fe](https://via.placeholder.com/15/e1f5fe/000000/?text=+) e1f5fe | ![#673ab7](https://via.placeholder.com/15/673ab7/000000/?text=+) 673ab7 |
| ![#b3e5fc](https://via.placeholder.com/15/b3e5fc/000000/?text=+) b3e5fc | ![#5e35b1](https://via.placeholder.com/15/5e35b1/000000/?text=+) 5e35b1 |
| ![#81d4fa](https://via.placeholder.com/15/81d4fa/000000/?text=+) 81d4fa | ![#512da8](https://via.placeholder.com/15/512da8/000000/?text=+) 512da8 |
| ![#4fc3f7](https://via.placeholder.com/15/4fc3f7/000000/?text=+) 4fc3f7 | ![#4527a0](https://via.placeholder.com/15/4527a0/000000/?text=+) 4527a0 |
| ![#29b6f6](https://via.placeholder.com/15/29b6f6/000000/?text=+) 29b6f6 | ![#311b92](https://via.placeholder.com/15/311b92/000000/?text=+) 311b92 |
| ![#03a9f4](https://via.placeholder.com/15/03a9f4/000000/?text=+) 03a9f4 | ![#7986cb](https://via.placeholder.com/15/7986cb/000000/?text=+) 7986cb |
| ![#e0f7fa](https://via.placeholder.com/15/e0f7fa/000000/?text=+) e0f7fa | ![#5c6bc0](https://via.placeholder.com/15/5c6bc0/000000/?text=+) 5c6bc0 |
| ![#b2ebf2](https://via.placeholder.com/15/b2ebf2/000000/?text=+) b2ebf2 | ![#3f51b5](https://via.placeholder.com/15/3f51b5/000000/?text=+) 3f51b5 |
| ![#80deea](https://via.placeholder.com/15/80deea/000000/?text=+) 80deea | ![#3949ab](https://via.placeholder.com/15/3949ab/000000/?text=+) 3949ab |
| ![#4dd0e1](https://via.placeholder.com/15/4dd0e1/000000/?text=+) 4dd0e1 | ![#303f9f](https://via.placeholder.com/15/303f9f/000000/?text=+) 303f9f |
| ![#26c6da](https://via.placeholder.com/15/26c6da/000000/?text=+) 26c6da | ![#283593](https://via.placeholder.com/15/283593/000000/?text=+) 283593 |
| ![#00bcd4](https://via.placeholder.com/15/00bcd4/000000/?text=+) 00bcd4 | ![#1a237e](https://via.placeholder.com/15/1a237e/000000/?text=+) 1a237e |
| ![#00acc1](https://via.placeholder.com/15/00acc1/000000/?text=+) 00acc1 | ![#2196f3](https://via.placeholder.com/15/2196f3/000000/?text=+) 2196f3 |
| ![#e0f2f1](https://via.placeholder.com/15/e0f2f1/000000/?text=+) e0f2f1 | ![#1e88e5](https://via.placeholder.com/15/1e88e5/000000/?text=+) 1e88e5 |
| ![#b2dfdb](https://via.placeholder.com/15/b2dfdb/000000/?text=+) b2dfdb | ![#1976d2](https://via.placeholder.com/15/1976d2/000000/?text=+) 1976d2 |
| ![#80cbc4](https://via.placeholder.com/15/80cbc4/000000/?text=+) 80cbc4 | ![#1565c0](https://via.placeholder.com/15/1565c0/000000/?text=+) 1565c0 |
| ![#4db6ac](https://via.placeholder.com/15/4db6ac/000000/?text=+) 4db6ac | ![#0d47a1](https://via.placeholder.com/15/0d47a1/000000/?text=+) 0d47a1 |
| ![#e8f5e9](https://via.placeholder.com/15/e8f5e9/000000/?text=+) e8f5e9 | ![#039be5](https://via.placeholder.com/15/039be5/000000/?text=+) 039be5 |
| ![#c8e6c9](https://via.placeholder.com/15/c8e6c9/000000/?text=+) c8e6c9 | ![#0288d1](https://via.placeholder.com/15/0288d1/000000/?text=+) 0288d1 |
| ![#a5d6a7](https://via.placeholder.com/15/a5d6a7/000000/?text=+) a5d6a7 | ![#0277bd](https://via.placeholder.com/15/0277bd/000000/?text=+) 0277bd |
| ![#81c784](https://via.placeholder.com/15/81c784/000000/?text=+) 81c784 | ![#01579b](https://via.placeholder.com/15/01579b/000000/?text=+) 01579b |
| ![#66bb6a](https://via.placeholder.com/15/66bb6a/000000/?text=+) 66bb6a | ![#0097a7](https://via.placeholder.com/15/0097a7/000000/?text=+) 0097a7 |
| ![#4caf50](https://via.placeholder.com/15/4caf50/000000/?text=+) 4caf50 | ![#00838f](https://via.placeholder.com/15/00838f/000000/?text=+) 00838f |
| ![#f1f8e9](https://via.placeholder.com/15/f1f8e9/000000/?text=+) f1f8e9 | ![#006064](https://via.placeholder.com/15/006064/000000/?text=+) 006064 |
| ![#dcedc8](https://via.placeholder.com/15/dcedc8/000000/?text=+) dcedc8 | ![#26a69a](https://via.placeholder.com/15/26a69a/000000/?text=+) 26a69a |
| ![#c5e1a5](https://via.placeholder.com/15/c5e1a5/000000/?text=+) c5e1a5 | ![#009688](https://via.placeholder.com/15/009688/000000/?text=+) 009688 |
| ![#aed581](https://via.placeholder.com/15/aed581/000000/?text=+) aed581 | ![#00897b](https://via.placeholder.com/15/00897b/000000/?text=+) 00897b |
| ![#9ccc65](https://via.placeholder.com/15/9ccc65/000000/?text=+) 9ccc65 | ![#00796b](https://via.placeholder.com/15/00796b/000000/?text=+) 00796b |
| ![#8bc34a](https://via.placeholder.com/15/8bc34a/000000/?text=+) 8bc34a | ![#00695c](https://via.placeholder.com/15/00695c/000000/?text=+) 00695c |
| ![#7cb342](https://via.placeholder.com/15/7cb342/000000/?text=+) 7cb342 | ![#004d40](https://via.placeholder.com/15/004d40/000000/?text=+) 004d40 |
| ![#f9fbe7](https://via.placeholder.com/15/f9fbe7/000000/?text=+) f9fbe7 | ![#43a047](https://via.placeholder.com/15/43a047/000000/?text=+) 43a047 |
| ![#f0f4c3](https://via.placeholder.com/15/f0f4c3/000000/?text=+) f0f4c3 | ![#388e3c](https://via.placeholder.com/15/388e3c/000000/?text=+) 388e3c |
| ![#e6ee9c](https://via.placeholder.com/15/e6ee9c/000000/?text=+) e6ee9c | ![#2e7d32](https://via.placeholder.com/15/2e7d32/000000/?text=+) 2e7d32 |
| ![#dce775](https://via.placeholder.com/15/dce775/000000/?text=+) dce775 | ![#1b5e20](https://via.placeholder.com/15/1b5e20/000000/?text=+) 1b5e20 |
| ![#d4e157](https://via.placeholder.com/15/d4e157/000000/?text=+) d4e157 | ![#689f38](https://via.placeholder.com/15/689f38/000000/?text=+) 689f38 |
| ![#cddc39](https://via.placeholder.com/15/cddc39/000000/?text=+) cddc39 | ![#558b2f](https://via.placeholder.com/15/558b2f/000000/?text=+) 558b2f |
| ![#c0ca33](https://via.placeholder.com/15/c0ca33/000000/?text=+) c0ca33 | ![#33691e](https://via.placeholder.com/15/33691e/000000/?text=+) 33691e |
| ![#afb42b](https://via.placeholder.com/15/afb42b/000000/?text=+) afb42b | ![#827717](https://via.placeholder.com/15/827717/000000/?text=+) 827717 |
| ![#9e9d24](https://via.placeholder.com/15/9e9d24/000000/?text=+) 9e9d24 | ![#ef6c00](https://via.placeholder.com/15/ef6c00/000000/?text=+) ef6c00 |
| ![#fffde7](https://via.placeholder.com/15/fffde7/000000/?text=+) fffde7 | ![#e65100](https://via.placeholder.com/15/e65100/000000/?text=+) e65100 |
| ![#fff9c4](https://via.placeholder.com/15/fff9c4/000000/?text=+) fff9c4 | ![#ff5722](https://via.placeholder.com/15/ff5722/000000/?text=+) ff5722 |
| ![#fff59d](https://via.placeholder.com/15/fff59d/000000/?text=+) fff59d | ![#f4511e](https://via.placeholder.com/15/f4511e/000000/?text=+) f4511e |
| ![#fff176](https://via.placeholder.com/15/fff176/000000/?text=+) fff176 | ![#e64a19](https://via.placeholder.com/15/e64a19/000000/?text=+) e64a19 |
| ![#ffee58](https://via.placeholder.com/15/ffee58/000000/?text=+) ffee58 | ![#d84315](https://via.placeholder.com/15/d84315/000000/?text=+) d84315 |
| ![#ffeb3b](https://via.placeholder.com/15/ffeb3b/000000/?text=+) ffeb3b | ![#bf360c](https://via.placeholder.com/15/bf360c/000000/?text=+) bf360c |
| ![#fdd835](https://via.placeholder.com/15/fdd835/000000/?text=+) fdd835 | ![#a1887f](https://via.placeholder.com/15/a1887f/000000/?text=+) a1887f |
| ![#fbc02d](https://via.placeholder.com/15/fbc02d/000000/?text=+) fbc02d | ![#8d6e63](https://via.placeholder.com/15/8d6e63/000000/?text=+) 8d6e63 |
| ![#f9a825](https://via.placeholder.com/15/f9a825/000000/?text=+) f9a825 | ![#795548](https://via.placeholder.com/15/795548/000000/?text=+) 795548 |
| ![#f57f17](https://via.placeholder.com/15/f57f17/000000/?text=+) f57f17 | ![#6d4c41](https://via.placeholder.com/15/6d4c41/000000/?text=+) 6d4c41 |
| ![#fff8e1](https://via.placeholder.com/15/fff8e1/000000/?text=+) fff8e1 | ![#5d4037](https://via.placeholder.com/15/5d4037/000000/?text=+) 5d4037 |
| ![#ffecb3](https://via.placeholder.com/15/ffecb3/000000/?text=+) ffecb3 | ![#4e342e](https://via.placeholder.com/15/4e342e/000000/?text=+) 4e342e |
| ![#ffe082](https://via.placeholder.com/15/ffe082/000000/?text=+) ffe082 | ![#3e2723](https://via.placeholder.com/15/3e2723/000000/?text=+) 3e2723 |
| ![#ffd54f](https://via.placeholder.com/15/ffd54f/000000/?text=+) ffd54f | ![#757575](https://via.placeholder.com/15/757575/000000/?text=+) 757575 |
| ![#ffca28](https://via.placeholder.com/15/ffca28/000000/?text=+) ffca28 | ![#616161](https://via.placeholder.com/15/616161/000000/?text=+) 616161 |
| ![#ffc107](https://via.placeholder.com/15/ffc107/000000/?text=+) ffc107 | ![#424242](https://via.placeholder.com/15/424242/000000/?text=+) 424242 |
| ![#ffb300](https://via.placeholder.com/15/ffb300/000000/?text=+) ffb300 | ![#212121](https://via.placeholder.com/15/212121/000000/?text=+) 212121 |
| ![#ffa000](https://via.placeholder.com/15/ffa000/000000/?text=+) ffa000 | ![#78909c](https://via.placeholder.com/15/78909c/000000/?text=+) 78909c |
| ![#ff8f00](https://via.placeholder.com/15/ff8f00/000000/?text=+) ff8f00 | ![#607d8b](https://via.placeholder.com/15/607d8b/000000/?text=+) 607d8b |
| ![#ff6f00](https://via.placeholder.com/15/ff6f00/000000/?text=+) ff6f00 | ![#546e7a](https://via.placeholder.com/15/546e7a/000000/?text=+) 546e7a |
| ![#fff3e0](https://via.placeholder.com/15/fff3e0/000000/?text=+) fff3e0 | ![#455a64](https://via.placeholder.com/15/455a64/000000/?text=+) 455a64 |
| ![#ffe0b2](https://via.placeholder.com/15/ffe0b2/000000/?text=+) ffe0b2 | ![#37474f](https://via.placeholder.com/15/37474f/000000/?text=+) 37474f |
| ![#ffcc80](https://via.placeholder.com/15/ffcc80/000000/?text=+) ffcc80 | ![#263238](https://via.placeholder.com/15/263238/000000/?text=+) 263238 |
| ![#ffb74d](https://via.placeholder.com/15/ffb74d/000000/?text=+) ffb74d |                                                                        |
| ![#ffa726](https://via.placeholder.com/15/ffa726/000000/?text=+) ffa726 |                                                                        |
| ![#ff9800](https://via.placeholder.com/15/ff9800/000000/?text=+) ff9800 |                                                                        |
| ![#fb8c00](https://via.placeholder.com/15/fb8c00/000000/?text=+) fb8c00 |                                                                        |
| ![#f57c00](https://via.placeholder.com/15/f57c00/000000/?text=+) f57c00 |                                                                        |
| ![#fbe9e7](https://via.placeholder.com/15/fbe9e7/000000/?text=+) fbe9e7 |                                                                        |
| ![#ffccbc](https://via.placeholder.com/15/ffccbc/000000/?text=+) ffccbc |                                                                        |
| ![#ffab91](https://via.placeholder.com/15/ffab91/000000/?text=+) ffab91 |                                                                        |
| ![#ff8a65](https://via.placeholder.com/15/ff8a65/000000/?text=+) ff8a65 |                                                                        |
| ![#ff7043](https://via.placeholder.com/15/ff7043/000000/?text=+) ff7043 |                                                                        |
| ![#efebe9](https://via.placeholder.com/15/efebe9/000000/?text=+) efebe9 |                                                                        |
| ![#d7ccc8](https://via.placeholder.com/15/d7ccc8/000000/?text=+) d7ccc8 |                                                                        |
| ![#bcaaa4](https://via.placeholder.com/15/bcaaa4/000000/?text=+) bcaaa4 |                                                                        |
| ![#fafafa](https://via.placeholder.com/15/fafafa/000000/?text=+) fafafa |                                                                        |
| ![#f5f5f5](https://via.placeholder.com/15/f5f5f5/000000/?text=+) f5f5f5 |                                                                        |
| ![#eeeeee](https://via.placeholder.com/15/eeeeee/000000/?text=+) eeeeee |                                                                        |
| ![#e0e0e0](https://via.placeholder.com/15/e0e0e0/000000/?text=+) e0e0e0 |                                                                        |
| ![#bdbdbd](https://via.placeholder.com/15/bdbdbd/000000/?text=+) bdbdbd |                                                                        |
| ![#9e9e9e](https://via.placeholder.com/15/9e9e9e/000000/?text=+) 9e9e9e |                                                                        |
| ![#eceff1](https://via.placeholder.com/15/eceff1/000000/?text=+) eceff1 |                                                                        |
| ![#cfd8dc](https://via.placeholder.com/15/cfd8dc/000000/?text=+) cfd8dc |                                                                        |
| ![#b0bec5](https://via.placeholder.com/15/b0bec5/000000/?text=+) b0bec5 |                                                                        |
| ![#90a4ae](https://via.placeholder.com/15/90a4ae/000000/?text=+) 90a4ae |                                                                        |

## More possibilities

- [SO - create-a-hexadecimal-colour-based-on-a-string-with-javascript](https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript)

- [A simple hash function](https://gist.github.com/iperelivskiy/4110988)
