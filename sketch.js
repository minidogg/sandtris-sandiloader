// START OF CODE
// ? Dead code that breaks the deobfuscated code with a too much recursion error.
var _0x10b09b = (function () {
    var _0x23e0ea = true
    return function (_0x285ae4, _0x255822) {
      var _0x8a6d8f = _0x23e0ea
        ? function () {
            if (_0x255822) {
              var _0x585f6e = _0x255822.apply(_0x285ae4, arguments)
              return (_0x255822 = null), _0x585f6e
            }
          }
        : function () {}
      return (_0x23e0ea = false), _0x8a6d8f
    }
  })(),
  constructorFuncInput = _0x10b09b(this, function () {
    return constructorFuncInput
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(constructorFuncInput)
      .search('(((.+)+)+)+$')
  })
// constructorFuncInput()

// ? Appears to disable console.log and all of that other good stuff.
var _0x13b067 = (function () {
    var _0x28c67a = true
    return function (_0x3b0083, _0x38b8f9) {
      var _0x336798 = _0x28c67a
        ? function () {
            if (_0x38b8f9) {
              var _0xb5bf66 = _0x38b8f9.apply(_0x3b0083, arguments)
              return (_0x38b8f9 = null), _0xb5bf66
            }
          }
        : function () {}
      return (_0x28c67a = false), _0x336798
    }
  })(),
  _0x2d762f = _0x13b067(this, function () {
    var _0x14998e
    try {
      var _0x142cb4 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x14998e = _0x142cb4()
    } catch (_0x525aa9) {
      _0x14998e = window
    }
    var _0x4bcca5 = (_0x14998e.console = _0x14998e.console || {}),
      _0x4523c5 = [
        // 'log',
        // 'warn',
        // 'info',
        // 'error',
        // 'exception',
        // 'table',
        // 'trace',
      ]
    for (var _0x414903 = 0; _0x414903 < _0x4523c5.length; _0x414903++) {
      var _0x5a6029 = _0x13b067.constructor.prototype.bind(_0x13b067),
        _0x1b5af5 = _0x4523c5[_0x414903],
        _0x2254a1 = _0x4bcca5[_0x1b5af5] || _0x5a6029
      _0x5a6029['__proto__'] = _0x13b067.bind(_0x13b067)
      _0x5a6029.toString = _0x2254a1.toString.bind(_0x2254a1)
      _0x4bcca5[_0x1b5af5] = _0x5a6029
    }
  })
_0x2d762f()
function HSVtoRGB(_0x5ac02e, _0x1853ab, _0x5a2ffc) {
  var _0x524c96,
    _0xbfaac8,
    _0x343583,
    _0xe60fe6,
    _0x542399,
    _0x35eb2a,
    _0x5c4ff8,
    _0x3afb60
  arguments.length === 1 &&
    ((_0x1853ab = _0x5ac02e.s),
    (_0x5a2ffc = _0x5ac02e.v),
    (_0x5ac02e = _0x5ac02e.h))
  _0xe60fe6 = Math.floor(_0x5ac02e * 6)
  _0x542399 = _0x5ac02e * 6 - _0xe60fe6
  _0x35eb2a = _0x5a2ffc * (1 - _0x1853ab)
  _0x5c4ff8 = _0x5a2ffc * (1 - _0x542399 * _0x1853ab)
  _0x3afb60 = _0x5a2ffc * (1 - (1 - _0x542399) * _0x1853ab)
  switch (_0xe60fe6 % 6) {
    case 0:
      ;(_0x524c96 = _0x5a2ffc), (_0xbfaac8 = _0x3afb60), (_0x343583 = _0x35eb2a)
      break
    case 1:
      ;(_0x524c96 = _0x5c4ff8), (_0xbfaac8 = _0x5a2ffc), (_0x343583 = _0x35eb2a)
      break
    case 2:
      ;(_0x524c96 = _0x35eb2a), (_0xbfaac8 = _0x5a2ffc), (_0x343583 = _0x3afb60)
      break
    case 3:
      ;(_0x524c96 = _0x35eb2a), (_0xbfaac8 = _0x5c4ff8), (_0x343583 = _0x5a2ffc)
      break
    case 4:
      ;(_0x524c96 = _0x3afb60), (_0xbfaac8 = _0x35eb2a), (_0x343583 = _0x5a2ffc)
      break
    case 5:
      ;(_0x524c96 = _0x5a2ffc), (_0xbfaac8 = _0x35eb2a), (_0x343583 = _0x5c4ff8)
      break
  }
  return {
    r: Math.round(_0x524c96 * 255),
    g: Math.round(_0xbfaac8 * 255),
    b: Math.round(_0x343583 * 255),
  }
}
var gridBG = [24, 21, 17],
  gameBG = [68, 60, 51],
  grid = [],
  scl = 4,
  padding = 4,
  columns = 100,
  rows = 160,
  buff,
  t = 0,
  playerBlock,
  nextBlock,
  vis,
  fullLine,
  cleartime = 0,
  placed = false,
  linesCleared = 0,
  score = 0,
  gameOffset = 4 * scl,
  nextOffset,
  gameRes,
  placeSound = 0.1,
  lineSound = 0.1,
  gameMusic = 0.1,
  pixelFont,
  gameOver = true,
  paused = true,
  startScreen,
  pauseScreen,
  modMenuPage,
  aboutScreen,
  gameoverScreen,
  gameoverText,
  timeText = '00:00',
  levelSlider,
  levelText,
  level = 1,
  sfxSlider1,
  sfxSlider2,
  musSlider1,
  musSlider2,
  musicText,
  lpfilter,
  speedf = 0.5,
  cssExportOptions = 0.5,
  scoreSubmitted = true
let userId
var lbUrl = 'https://fanrco.pythonanywhere.com'

//This code was used for some code submission stuff before but I deleted it. If you really want it so bad, then deobfuscate the code yourself.
function handleReturnMessage(_0x4600b6) {
  let reponseBoxEl = document.getElementById('responseBox')
  if (_0x4600b6.hasOwnProperty('message')) {
    _0x294828.innerHTML = _0x4600b6.message
    return
  }
  _0x294828.innerHTML = _0x4600b6.error
  scoreSubmitted = false
}
function submitScore() {
  if (scoreSubmitted) {
    return
  }
  scoreSubmitted = true
}
function loadLeaderboard() {
  return;
  fetch(lbUrl + '/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: userId }),
  })
    .then((_0x167539) => _0x167539.json())
    .then((leaderboardJson) => {
      const leaderboardList = document.getElementById('leaderboard-list')
      leaderboardList.innerHTML = ''
      leaderboard = leaderboardJson.leaderboard
      bestUserScore = leaderboardJson.bestUserScore
      leaderboard.forEach((player) => {
        const playerDiv = document.createElement('div')
        playerDiv.className =
          'leaderboard ' +
          (player.rank % 2 ? 'leaderboard--gray' : 'leaderboard--black')
        playerDiv.innerHTML =
          '\n          <p>' +
          player.rank +
          '.</p>\n          <div class="namescore">\n            <p>' +
          player.name +
          '</p>\n            <p>' +
          player.score +
          '</p>\n          </div>\n        '
        leaderboardList.appendChild(playerDiv)
        const yourBestScoreDiv = document.getElementById('bestScoreEntry')
        yourBestScoreDiv.innerHTML =
          '\n        <p>' + bestUserScore.rank ??
          '?' +
            '.</p>\n        <div class="namescore">\n          <p>' +
            bestUserScore.name ??
          '???' + '</p>\n          <p>' + bestUserScore.score ??
          '???' + '</p>\n        </div>'
      })
    })
    .catch((_0x27f65e) => console.error(_0x27f65e))
}
function getCookie(_0x157250) {
  const _0xead635 = '; ' + document.cookie,
    _0x2ed096 = _0xead635.split('; ' + _0x157250 + '=')
  if (_0x2ed096.length === 2) {
    return _0x2ed096.pop().split(';').shift()
  }
}
function setCookie(_0x4d46d2, _0x73a6c7, _0x384e10) {
  const _0xa089bb = new Date()
  _0xa089bb.setTime(_0xa089bb.getTime() + _0x384e10 * 24 * 60 * 60 * 1000)
  document.cookie =
    _0x4d46d2 +
    '=' +
    _0x73a6c7 +
    '; expires=' +
    _0xa089bb.toUTCString() +
    '; path=/'
}
function generateUserId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
}
var brick = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 2, 2, 0, 1, 0],
    [0, 1, 0, 2, 2, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ],
  staticbrick = [
    [2, 0, 0, 0, 0, 0, 0, 2],
    [0, 1, 2, 1, 1, 2, 1, 0],
    [0, 2, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 2, 1, 1, 1, 1, 2, 0],
    [0, 1, 2, 1, 1, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 2],
  ],
  blockHueOptions = [102, 196, 340, 50],
  blockType = [
    [
      [0, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 0, 1, 1],
    ],
    [
      [0, 0, 0, 1, 1, 0, 0, 2],
      [0, 0, 1, 0, 2, 0, 2, 1],
      [0, 2, 1, 2, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 2, 1],
    ],
    [
      [0, 0, 1, 0, 1, 1, 1, 2],
      [0, 1, 1, 1, 2, 1, 2, 0],
      [0, 0, 0, 1, 0, 2, 1, 2],
      [0, 0, 0, 1, 1, 0, 2, 0],
    ],
    [
      [0, 0, 1, 0, 1, 1, 2, 1],
      [0, 1, 0, 2, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 1, 2, 1],
      [0, 1, 0, 2, 1, 1, 1, 0],
    ],
    [
      [0, 1, 1, 1, 1, 0, 2, 0],
      [0, 0, 0, 1, 1, 1, 1, 2],
      [0, 1, 1, 1, 1, 0, 2, 0],
      [0, 0, 0, 1, 1, 1, 1, 2],
    ],
    [
      [0, 0, 1, 0, 2, 0, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 2],
      [1, 0, 0, 1, 1, 1, 2, 1],
      [0, 0, 0, 1, 0, 2, 1, 1],
    ],
    [
      [0, 0, 1, 0, 2, 0, 3, 0],
      [0, 0, 0, 1, 0, 2, 0, 3],
      [0, 0, 1, 0, 2, 0, 3, 0],
      [0, 0, 0, 1, 0, 2, 0, 3],
    ],
  ],
  blockWidth = [
    [1, 1, 1, 1],
    [1, 2, 1, 2],
    [1, 2, 1, 2],
    [2, 1, 2, 1],
    [2, 1, 2, 1],
    [2, 1, 2, 1],
    [3, 0, 3, 0],
  ],
  blockHeight = [
    [1, 1, 1, 1],
    [2, 1, 2, 1],
    [2, 1, 2, 1],
    [1, 2, 1, 2],
    [1, 2, 1, 2],
    [1, 2, 1, 2],
    [0, 3, 0, 3],
  ]
function preload() {
  userId = getCookie('userId')
  !userId && ((userId = generateUserId()), setCookie('userId', userId, 9999))
  soundFormats('mp3', 'ogg')
  placeSound = loadSound('sounds/place')
  lineSound = loadSound('sounds/line')
  gameMusic = loadSound('sounds/music')
  pixelFont = loadFont('fonts/retroFont.ttf')
}
function swiped(_0x28465c) {}
function Block(_0x57b1a5, _0x52a467) {
  this.pos = createVector(0, 0)
  this.grav = speedf
  this.sprite = null
  this.grid = []
  this.type = 0
  this.col = 0
  this.static = false
  this.rot = 0
  this.rotReset = true
  this.clearGrid = function () {
    this.grid = []
    for (let _0x435117 = 0; _0x435117 < 32; _0x435117++) {
      this.grid.push(new Array(32).fill(null))
    }
  }
  this.renderBlock = function () {
    this.clearGrid()
    AddBlock(
      this.grid,
      0,
      31,
      blockType[this.type][this.rot],
      this.col,
      this.static
    )
    renderFromArray(this.grid, this.sprite)
  }
  this.newBlock = function () {
    this.static = false
    this.sprite = createImage(32, 32)
    this.type = int(random(blockType.length))
    this.col = int(random(blockHueOptions.length)) // Normally instead of blockHueOptions.length it is 4 but I changed it
    this.pos = createVector(
      int(columns / 2 - (blockWidth[this.type][0] + 1)),
      0
    )
    this.renderBlock()
  }
  this.show = function () {
    image(
      this.sprite,
      this.pos.x * scl,
      (this.pos.y - 32) * scl,
      32 * scl,
      32 * scl
    )
  }
  this.update = function () {
    let flooredX = Math.floor(this.pos.x),
      flooredY = Math.floor(this.pos.y)
    if (flooredY + 1 >= rows) {
      placed = true
    } else {
      for (let _0x13cedf = 0; _0x13cedf < 4; _0x13cedf++) {
        let _0x46bc64 = _0x13cedf * 2,
          _0x260128 = blockType[this.type][this.rot][_0x46bc64],
          _0x4ede63 = blockType[this.type][this.rot][_0x46bc64 + 1],
          _0x45d050 = int(flooredX + _0x260128 * 8),
          _0x55c96e = int(flooredY - _0x4ede63 * 8)
        if (_0x55c96e <= 0) {
          continue
        }
        for (let _0x6d799a = 0; _0x6d799a < 8; _0x6d799a++) {
          grid[_0x55c96e + 1][_0x45d050 + _0x6d799a] != null &&
            (grid[_0x55c96e][_0x45d050 + _0x6d799a] && (this.pos.y -= 1),
            (placed = true))
        }
      }
    }
    if (placed) {
      this.pos.y - 8 * (blockHeight[this.type][this.rot] + 1) < 0 &&
        ((gameOver = true), gameOverScore(), (gameoverScreen.open = true))
      AddBlock(
        grid,
        flooredX,
        min(flooredY, rows - 1),
        blockType[this.type][this.rot],
        this.col,
        this.static
      )
      placeSound.play()
      return
    }
    this.pos.y += this.grav
  }
  this.rotate = function () {
    this.rot = (this.rot + 1) % 4
    this.clearGrid()
    this.sprite = createImage(32, 32)
    AddBlock(
      this.grid,
      0,
      31,
      blockType[this.type][this.rot],
      this.col,
      this.static
    )
    renderFromArray(this.grid, this.sprite)
    let _0x2f557b = blockWidth[this.type][this.rot] + 1
    this.pos.x > columns - _0x2f557b * 8 &&
      (this.pos.x = columns - _0x2f557b * 8)
  }
  this.controls = function (_0x509725 = -1) {
    let _0x5461e5 = 1
    ;(keyIsDown(16) || keyIsDown(17)) && (_0x5461e5 = 2)
    keyIsDown(UP_ARROW) || _0x509725 == 8
      ? this.rotReset && (this.rotate(), (this.rotReset = false))
      : (this.rotReset = true)
    ;(keyIsDown(LEFT_ARROW) || _0x509725 == 2) &&
      ((this.pos.x -= _0x5461e5), this.pos.x < 0 && (this.pos.x = 0))
    if (keyIsDown(RIGHT_ARROW) || _0x509725 == 4) {
      this.pos.x += _0x5461e5
      let _0x4396c9 = blockWidth[this.type][this.rot] + 1
      this.pos.x > columns - _0x4396c9 * 8 &&
        (this.pos.x = columns - _0x4396c9 * 8)
    }
    ;(keyIsDown(DOWN_ARROW) || _0x509725 == 16) &&
      ((this.pos.y += 1), (score += 1))
  }
}
function resetGame() {
  scoreSubmitted = false
  let scoreSubmissionResponse = document.getElementById('responseBox')
  scoreSubmissionResponse.innerHTML = ''
  score = 0
  linesCleared = 0
  staticCount = 0
  t = 0
  if(typeof(lpfilter)=="undefined"){
    alert("Please wait a bit for the game to load...")
    return
  }
  lpfilter.freq(10000)
  placed = false
  buff = createImage(columns, rows)
  grid = []
  for (let _0x130550 = 0; _0x130550 < rows; _0x130550++) {
    grid[_0x130550] = []
    for (let _0x2c53cf = 0; _0x2c53cf < columns; _0x2c53cf++) {
      grid[_0x130550].push(null)
    }
  }
  playerBlock = new Block(width / 2 - gameOffset, 0)
  playerBlock.newBlock()
  nextBlock = new Block(width / 2 - gameOffset, 0)
  nextBlock.newBlock()
}
function startGame() {
  resetGame()
  paused = false
  gameOver = false
  startScreen.open = false
  gameMusic.stop()

  ModApi.dispatchEventToHook("start", {}) // this is some modded code
}
function unpauseGame() {
  lpfilter.freq(10000)
  paused = false
  pauseScreen.open = false
}
function newGame() {
  pauseScreen.open = false
  gameoverScreen.open = false
  startScreen.open = true
  gameMusic.stop()
}
function SFXvolume(_0x2003ba) {
  let _0xb1c69d = _0x2003ba / 10
  placeSound.setVolume(_0xb1c69d / 2)
  lineSound.setVolume(_0xb1c69d / 2)
  sfxSlider1.value = _0x2003ba
  sfxSlider2.value = _0x2003ba
}
function MUSvolume(_0x11f79b) {
  let _0x258ed3 = _0x11f79b / 10
  gameMusic.setVolume(_0x258ed3 / 2)
  musSlider1.value = _0x11f79b
  musSlider2.value = _0x11f79b
}
function toggleAbout() {
  aboutScreen.open = !aboutScreen.open
  startScreen.open = !startScreen.open
}
function toggleModMenu() {
  modMenuPage.open = !modMenuPage.open
  startScreen.open = !startScreen.open
}

document.getElementById("toggleAbout").onclick = toggleAbout
function gameOverScore() {
  gameoverText.innerHTML = ''
  gameoverText.innerHTML += 'SCORE: ' + score
  gameoverText.innerHTML += ' LINES: ' + linesCleared
}
function shareText() {
  let shareTextResult = '',
    levelAsString = level.toString(),
    lineClearedAsString = linesCleared.toString(),
    scoreAsString = score.toString()
  shareTextResult += 'LEVEL: ' + levelAsString + ' '.repeat(6 - levelAsString.length) + '| '
  shareTextResult += 'LINES: ' + lineClearedAsString + ' '.repeat(6 - lineClearedAsString.length) + '\n'
  shareTextResult += 'SCORE: ' + scoreAsString + ' '.repeat(9 - scoreAsString.length) + '| '
  shareTextResult += 'TIME: ' + timeText + ' '.repeat(7 - timeText.length) + '\n'
  shareTextResult += 'Play now at https://sandtris.com/'
  navigator.clipboard.writeText(shareTextResult)
  alert('Share Text Copied to Clipboard!')
}
function setup() {
  startScreen = document.getElementById('startpage')
  pauseScreen = document.getElementById('pausepage')
  modMenuPage = document.getElementById("modpage")
  gameoverScreen = document.getElementById('gameoverpage')
  aboutScreen = document.getElementById('aboutpage')
  sfxSlider1 = document.getElementById('sfx1Slider')
  sfxSlider2 = document.getElementById('sfx2Slider')
  musSlider1 = document.getElementById('mus1Slider')
  musSlider2 = document.getElementById('mus2Slider')
  gameoverText = document.getElementById('gameoverText')
  loadLeaderboard()
  gameRes = createVector(columns * scl, rows * scl)
  nextOffset = gameRes.x + gameOffset
  cnv = createCanvas(gameRes.x + gameOffset * 11, gameRes.y)
  cnv.parent('cnv')
  textFont(pixelFont)
  frameRate(60)
  noSmooth()
  lpfilter = new p5.LowPass()
  lpfilter.freq(10000)
  gameMusic.disconnect()
  gameMusic.connect(lpfilter)
  gameMusic.setVolume(0.5)
  SFXvolume(1)
  MUSvolume(1)
  resetGame()
}

let BrickSize = 8
function AddBlock(
  pixelArray,
  _0x43bde1,
  _0x41196e,
  _0x168184,
  blockColorId,
  _0x37a2e7
) {
  for (let _0x3f0b12 = 0; _0x3f0b12 < 4; _0x3f0b12++) {
    AddSingleBrick(
      pixelArray,
      _0x43bde1 + _0x168184[_0x3f0b12 * 2] * BrickSize,
      _0x41196e - _0x168184[_0x3f0b12 * 2 + 1] * BrickSize,
      blockColorId,
      _0x37a2e7
    )
  }
}

function AddSingleBrick(pixelArray, x, y, colorId, isStatic) {
// consoleLog("BRICK ARGS", pixelArray, x, y, colorId, isStatic)
  let theBrick = brick
  isStatic && (theBrick = staticbrick)
  for (let pixelY = 0; pixelY < BrickSize; pixelY++) {
    for (let pixelX = 0; pixelX < BrickSize; pixelX++) {
      if (y - pixelY < 0) {
        continue
      }
      let RGBcolor = HSVtoRGB(
        blockHueOptions[colorId] / 360,
        0.9 - isStatic / 3,
        map(theBrick[pixelY][pixelX], 0, 2, 0.6, 1)
      )
      pixelArray[y - pixelY][x + pixelX] = [
        colorId,
        RGBcolor.r,
        RGBcolor.g,
        RGBcolor.b,
        0,
        isStatic,
      ]
    }
  }
}
function renderFromArray(_0x104de9, _0xd979d5) {
  let _0x2e5128 = _0x104de9.length,
    _0x424100 = _0x104de9[0].length
  _0xd979d5.loadPixels()
  for (let _0x5e24b8 = 0; _0x5e24b8 < _0x2e5128; _0x5e24b8++) {
    for (let _0x48a429 = 0; _0x48a429 < _0x424100; _0x48a429++) {
      let _0x237d64 = (_0x5e24b8 * _0x424100 + _0x48a429) * 4
      if (_0x104de9[_0x5e24b8][_0x48a429] == null) {
        _0xd979d5.pixels[_0x237d64] = 0
        _0xd979d5.pixels[_0x237d64 + 1] = 0
        _0xd979d5.pixels[_0x237d64 + 2] = 0
        _0xd979d5.pixels[_0x237d64 + 3] = 0
        continue
      }
      _0xd979d5.pixels[_0x237d64] = _0x104de9[_0x5e24b8][_0x48a429][1]
      _0xd979d5.pixels[_0x237d64 + 1] = _0x104de9[_0x5e24b8][_0x48a429][2]
      _0xd979d5.pixels[_0x237d64 + 2] = _0x104de9[_0x5e24b8][_0x48a429][3]
      _0xd979d5.pixels[_0x237d64 + 3] = 255
    }
  }
  _0xd979d5.updatePixels()
}
function updateLogic(_0xf6a810, _0x1b3b71) {
  if (grid[_0x1b3b71][_0xf6a810] == null) {
    return
  }
  grid[_0x1b3b71][_0xf6a810][4] = 0
  if (_0x1b3b71 >= rows - 1) {
    return
  }
  if (grid[_0x1b3b71 + 1][_0xf6a810] == null) {
    grid[_0x1b3b71 + 1][_0xf6a810] = grid[_0x1b3b71][_0xf6a810]
    grid[_0x1b3b71][_0xf6a810] = null
    return
  }
  if (grid[_0x1b3b71][_0xf6a810][5]) {
    return
  }
  let _0x23d670 = _0xf6a810 > 0 && grid[_0x1b3b71 + 1][_0xf6a810 - 1] == null,
    _0x21df41 =
      _0xf6a810 < columns - 1 && grid[_0x1b3b71 + 1][_0xf6a810 + 1] == null
  if (_0x23d670 && _0x21df41) {
    if (random() < 0.5) {
      grid[_0x1b3b71 + 1][_0xf6a810 - 1] = grid[_0x1b3b71][_0xf6a810]
      grid[_0x1b3b71][_0xf6a810] = null
      return
    }
    grid[_0x1b3b71 + 1][_0xf6a810 + 1] = grid[_0x1b3b71][_0xf6a810]
    grid[_0x1b3b71][_0xf6a810] = null
    return
  }
  if (_0x23d670) {
    grid[_0x1b3b71 + 1][_0xf6a810 - 1] = grid[_0x1b3b71][_0xf6a810]
    grid[_0x1b3b71][_0xf6a810] = null
    return
  }
  if (_0x21df41) {
    grid[_0x1b3b71 + 1][_0xf6a810 + 1] = grid[_0x1b3b71][_0xf6a810]
    grid[_0x1b3b71][_0xf6a810] = null
    return
  }
}
function updateGrid() {
  if (t % 4 == 0) {
    for (let _0x432e2c = rows - 1; _0x432e2c >= 0; _0x432e2c--) {
      for (let _0x58b134 = 0; _0x58b134 < columns; _0x58b134++) {
        updateLogic(_0x58b134, _0x432e2c)
      }
    }
    return
  }
  if (t % 4 == 2) {
    for (let _0x2d7c67 = rows - 1; _0x2d7c67 >= 0; _0x2d7c67--) {
      for (let _0x4a9a19 = columns - 1; _0x4a9a19 >= 0; _0x4a9a19--) {
        updateLogic(_0x4a9a19, _0x2d7c67)
      }
    }
  }
}
function checkLine() {
  vis = []
  for (let _0x533cc5 = 0; _0x533cc5 < rows; _0x533cc5++) {
    vis = []
    fullLine = false
    if (grid[_0x533cc5][0] == null || grid[_0x533cc5][0][4] == 1) {
      continue
    }
    floodFill(0, _0x533cc5, grid[_0x533cc5][0][0])
    if (!fullLine) {
      continue
    }
    return
  }
}
function floodFill(_0x57e269, _0x52a26c, _0x47d543) {
  if (
    _0x57e269 < 0 ||
    _0x57e269 >= columns ||
    _0x52a26c < 0 ||
    _0x52a26c >= rows ||
    grid[_0x52a26c][_0x57e269] == null ||
    grid[_0x52a26c][_0x57e269][4] == 1 ||
    grid[_0x52a26c][_0x57e269][0] != _0x47d543
  ) {
    return
  }
  _0x57e269 == columns - 1 && (fullLine = true)
  grid[_0x52a26c][_0x57e269][4] = 1
  vis.push([_0x57e269, _0x52a26c])
  floodFill(_0x57e269 + 1, _0x52a26c, _0x47d543)
  floodFill(_0x57e269 - 1, _0x52a26c, _0x47d543)
  floodFill(_0x57e269, _0x52a26c + 1, _0x47d543)
  floodFill(_0x57e269, _0x52a26c - 1, _0x47d543)
}
function setLineColor(_0x16ca51) {
  let _0x2dbff5 = 255
  _0x16ca51 % 10 < 5 && (_0x2dbff5 = 0)
  for (let _0x4449f8 of vis) {
    grid[_0x4449f8[1]][_0x4449f8[0]][1] = _0x2dbff5
    grid[_0x4449f8[1]][_0x4449f8[0]][2] = _0x2dbff5
    grid[_0x4449f8[1]][_0x4449f8[0]][3] = _0x2dbff5
  }
}
function deleteLine(_0x7daaa9) {
  for (let _0xc223c7 of vis) {
    grid[_0xc223c7[1]][_0xc223c7[0]] = null
  }
  score += vis.length
  vis = []
}
function UI() {
  renderFromArray(grid, buff)
  noStroke()
  background(gameBG[0], gameBG[1], gameBG[2])
  fill(gridBG[0], gridBG[1], gridBG[2])
  rect(0, 0, columns * scl, rows * scl)
  image(buff, 0, 0, columns * scl, rows * scl)
  !gameOver && !placed && playerBlock.show()
  fill(gridBG[0], gridBG[1], gridBG[2])
  rect(nextOffset, gameOffset * 2, gameOffset * 10, gameOffset * 10)
  image(
    nextBlock.sprite,
    nextOffset + (5 - (blockWidth[nextBlock.type][0] + 1)) * gameOffset,
    (5 - (6 - blockHeight[nextBlock.type][0]) + 1) * gameOffset,
    32 * scl,
    32 * scl
  )
  let _0x159de5 = Math.floor(t / 3600),
    _0x56dbaa = Math.floor(t / 60) % 60
  _0x159de5 < 10 && (_0x159de5 = '0' + _0x159de5)
  _0x56dbaa < 10 && (_0x56dbaa = '0' + _0x56dbaa)
  timeText = _0x159de5 + ':' + _0x56dbaa
  fill(230).stroke(0).strokeWeight(8).textSize(32)
  text(timeText, nextOffset - 2, gameOffset * 16)
  text('LINES:', nextOffset - 2, gameOffset * 19)
  text(linesCleared, nextOffset - 2, gameOffset * 21)
  text('SCORE:', nextOffset - 2, gameOffset * 24)
  text(score, nextOffset - 2, gameOffset * 26)
  text('LEVEL:', nextOffset - 2, gameOffset * 29)
  text(level, nextOffset - 2, gameOffset * 31)
}
function keyPressed() {
  if (keyCode === 80) {
    if (gameOver) {
      return
    }
    paused ? lpfilter.freq(10000) : lpfilter.freq(200)
    paused = !paused
    pauseScreen.open = !pauseScreen.open
  }
}
function GameLogic() {
  if (paused) {
    return
  }
  if (gameOver) {
    gameMusic.stop()
    return
  }
  if (fullLine) {
    cleartime == 0 && ((linesCleared += 1), lineSound.play())
    cleartime += 1
    setLineColor(cleartime)
    cleartime > 30 && (deleteLine(), (cleartime = 0), (fullLine = false))
    return
  }
  placed &&
    (!gameMusic.isPlaying() && gameMusic.loop(),
    (playerBlock = nextBlock),
    (nextBlock = new Block(width / 2, 0)),
    nextBlock.newBlock(),
    playerBlock.col == nextBlock.col &&
      random() < cssExportOptions &&
        ((nextBlock.col = (nextBlock.col + 1) % 4), nextBlock.renderBlock()),
    (placed = false))
  level = Math.min(Math.floor(linesCleared / 10), 9) + 1
  speedf = 0.5 + level * 0.1
  cssExportOptions = 0.5 + level * 0.02
  updateGrid()
  playerBlock.update()
  playerBlock.controls()
  checkLine()
  t += 1
}
function draw() {
  UI()
  GameLogic()
}
