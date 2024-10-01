import * as Lib from 'merkle-reference'

/** @type {Array<[unknown, string]>} */
const fixtures = [
  [null, 'bgcw577yqly5wcktxtcseninyl4u3sqwzrlqmdkugxrncr67x3xtq'],
  [true, 'bd5gsrluwlf2unzhgd3jidzhmwclpyohd3ccm7yqqhc4tn6fejmaa'],
  [false, 'bl6afhktctiibopldpshfthiitlivdkvox6x4rwqakj5ubhz33gca'],
  [1985, 'b4ob7njt6ngtc7723fryqym6uemvyvvfntjwphglwe3ytglbwhx4q'],
  [1985n, 'b4ob7njt6ngtc7723fryqym6uemvyvvfntjwphglwe3ytglbwhx4q'],
  [0, 'bcujtdlzjfv36ywvw65hgcsfdhknl3oix4dawsacajka3xxlixdbq'],
  [0n, 'bcujtdlzjfv36ywvw65hgcsfdhknl3oix4dawsacajka3xxlixdbq'],
  [-17, 'b3xqp6x4cxkwzwcebyerbxmizxhjh6hwbcga3etewecndltwwusta'],
  [-17n, 'b3xqp6x4cxkwzwcebyerbxmizxhjh6hwbcga3etewecndltwwusta'],
  [18.033, 'bmjrgvd75uynefn3hljzkl2lg4xqthymoqolc22qwtxl2crew27fa'],
  ['', 'b5f6eqzbptqelbgzg4vhai2zrwl7txaueg2mnzoqebrdtjazc7tea'],
  ['hello world', 'b2ip5bcmbwyfmckglvjbttorkwz4seqyqpyq425g6iyvyf2d6v2tq'],
  [
    new Uint8Array([0x01, 0x02, 0x03, 0x04]),
    'b65rbugtff54dlisisdpkhlyhznhrzue3ulpe5nxdc5gj7fu3fc5q',
  ],
  [new Uint8Array(0), 'bwgevl5ukcq323qoxqc3fxoyiz2a2ex7tvrfxw33ca4abekdkikiq'],
  [
    { five: 5, on: 3, one: 1, four: 4, fo: 'fo' },
    'bnxyac6dykryma5jnau3slq5af653rfss7lagpmdgzehtofwkesmq',
  ],
  [[1, 2, 3], 'bwwooaxibglmzjgenm4fgrbcbu7tcorrm4epsn6m2imvxhqaauupa'],
  [[], 'bpxrc7xau6eueyytgdmxponimbq7rjjv3h272s7xkbymix3dxll3q'],
  [['hi'], 'bnxhvhxestniwdvllxh5cbvjphldncqmv7f7kmnsbzqjgnfel7ozq'],
  [['hi', 'world'], 'bloy64mvt5nctz376ygxeibsy4ptpmew7m3nunkvpelx7apnr4f5q'],
  [
    ['Point', ['x', 1], ['y', 2]],
    'bmnlrm2y57d5fgil7vyts2nzpghdfogmbi5bh4uc7dbafpgztpcqa',
  ],
  [{}, 'brfmf3m2g37pnvl6z7vtfewddf4d46csj5xtcprv73gdpp7uv4cwa'],
  [
    {
      message: { from: 'gozala', to: 'mikeal', payload: 'hi' },
    },
    'bh36wnfqmtfpzeuzjbbzgzwad2o5k24g2h45tdnzwlmu5g2zv6r5q',
  ],
  [
    new Map([[{ x: 2 }, { y: 3 }]]),
    'bxth63v735fyz67w6id63udsjv35ye6rdzbea7k4hmlj5yrcojvbq',
  ],
  [new Set(), 'brfmf3m2g37pnvl6z7vtfewddf4d46csj5xtcprv73gdpp7uv4cwa'],
  [new Set([1]), 'bovbshrxygewrapu4uy7x5d726jf6cku4qmtwinqzgv2rqscqrceq'],
  [
    new Set([{ x: 1 }]),
    'bpvfvupsk4kmtfjzwhrzfz5echa4cmlnbadowvcpjny63bohjohea',
  ],
  [
    new Set([{ x: 1 }, { x: 5 }]),
    'bjnfk3x34g57xmszjugfwjcmtb4k5kkdn7vsgsz7xql5i6jwexawq',
  ],
  [
    new Set([{ x: 2 }, { x: 5 }]),
    'bhqwn55rtd5jgcbmlcqk6mjzxxoinlygfd66zuzndethkrxgwzznq',
  ],
  [
    new Set([{ x: 2 }, { y: 3 }]),
    'bk4bibfrz3e4asykgxw4x5qwibr46mtvrxuvculoietyngrj2doya',
  ],
]

/**
 * @type {import('entail').Suite}
 */
export const testLib = {
  ...Object.fromEntries(
    fixtures.map(([data, out]) => [
      out,
      (assert) => {
        assert.equal(Lib.id(data), out)
      },
    ])
  ),
}

/**
 * @type {import('entail').Suite}
 */
export const testError = {
  'throws on symbols': (assert) => {
    assert.throws(() => Lib.id(Symbol.for('hello')), /Unknown type/)
  },
}
