const { create, Client, decryptMedia } = require('@open-wa/wa-automate');
const fs = require('fs-extra');
const axios = require('axios');
const moment = require('moment-timezone');
const get = require('got');
const os = require('os');
const speed = require('performance-now');
const { msgFilter, color, processTime, isUrl } = require('./utils');
const { uploadImages, custom } = require('./utils/fetcher');
const fetch = require('node-fetch');
const { spawn, exec } = require('child_process');
const { sleep, custome } = require('./lib/functions');
const { snk, info, donate, readme, sewa, contact, tnc, shop, game } = require('./lib/help');
const { levell, card, limitt, buyerr, premium, fishh, huntt } = require('./lib/function');
const { urlShortener } = require('./lib');
//const tiktok = require('./lib/downloader')
const { stdout } = require('process');
const bent = require('bent');
const path = require('path'); //tomp3 bass distord
const ffmpeg = require('fluent-ffmpeg'); //tomp3 bass distord
const webp = require('webp-converter');
//const db = require('lowdb')
const ms = require('parse-ms');
const toMs = require('ms');
const sharp = require('sharp');
const Exif = require('./tools/exif');
const exif = new Exif();

// LOAD FILE
const bad = JSON.parse(fs.readFileSync('./lib/bad.json'));
const badword = JSON.parse(fs.readFileSync('./lib/database/group/badword.json'));
const virtex = JSON.parse(fs.readFileSync('./lib/database/group/virtex.json'));
const banned = JSON.parse(fs.readFileSync('./lib/database/user/banned.json'));
const NoLink = JSON.parse(fs.readFileSync('./lib/database/group/NoLink.json'));
const limit = JSON.parse(fs.readFileSync('./lib/database/user/limit.json'));
const umpan = JSON.parse(fs.readFileSync('./lib/database/user/umpan.json'));
const peluru = JSON.parse(fs.readFileSync('./lib/database/user/peluru.json'));
const medialimit = JSON.parse(fs.readFileSync('./lib/database/user/medialimit.json'));
const muted = JSON.parse(fs.readFileSync('./lib/database/user/muted.json'));
const setting = JSON.parse(fs.readFileSync('./lib/setting.json'));
const msgLimit = JSON.parse(fs.readFileSync('./lib/database/user/msgLimit.json'));
const admin = JSON.parse(fs.readFileSync('./lib/database/user/admin.json'));
const regis = JSON.parse(fs.readFileSync('./lib/data/regis.json'));
const antisticker = JSON.parse(fs.readFileSync('./lib/database/group/antisticker.json'));
const stickerspam = JSON.parse(fs.readFileSync('./lib/database/group/stickerspam.json'));
const levelling = JSON.parse(fs.readFileSync('./lib/database/group/levelling.json'));
const level = JSON.parse(fs.readFileSync('./lib/database/user/level.json'));
const autostiker = JSON.parse(fs.readFileSync('./lib/database/group/autostiker.json'));
const limite = JSON.parse(fs.readFileSync('./lib/database/user/limite.json'));
const climit = JSON.parse(fs.readFileSync('./lib/database/user/climit.json'));
const slimit = JSON.parse(fs.readFileSync('./lib/database/user/slimit.json'));
const dlimit = JSON.parse(fs.readFileSync('./lib/database/user/dlimit.json'));
const flimit = JSON.parse(fs.readFileSync('./lib/database/user/flimit.json'));
const shotlimit = JSON.parse(fs.readFileSync('./lib/database/user/shotlimit.json'));
const delimit = JSON.parse(fs.readFileSync('./lib/database/user/delimit.json'));
const reedem = JSON.parse(fs.readFileSync('./lib/database/user/reedem.json'));
const _bg = JSON.parse(fs.readFileSync('./lib/database/user/card/background.json'));
const estimate = JSON.parse(fs.readFileSync('./lib/database/est.json'));
const premer = JSON.parse(fs.readFileSync('./lib/database/user/buyer.json'));
const cg = JSON.parse(fs.readFileSync('./lib/database/cg.json'));
const fish = JSON.parse(fs.readFileSync('./lib/database/user/fish.json'));
const sea = JSON.parse(fs.readFileSync('./lib/database/user/sea.json'));
const ocean = JSON.parse(fs.readFileSync('./lib/database/user/ocean.json'));
const hunt = JSON.parse(fs.readFileSync('./lib/database/user/hunt.json'));
const forest = JSON.parse(fs.readFileSync('./lib/database/user/forest.json'));

let { limitCount, medialimitCount, peluruCount, umpanCount, memberLimit, groupLimit, banChats, prefix, restartState: isRestart, mtc } = setting;

moment.tz.setDefault('Asia/Jakarta').locale('id');

module.exports = tobz = async (tobz, message) => {
  try {
    const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList } = message;

    let { body } = message;
    const { name, formattedTitle } = chat;
    let { pushname, verifiedName } = sender;
    pushname = pushname || verifiedName;
    const commands = caption || body || '';
    const command = commands.toLowerCase().split(' ')[0] || '';
    const args = commands.split(' ');
    const isCmd = command.startsWith(`${prefix}`);
    const stickermsg = message.type == 'sticker';
    const SN = GenerateSerialNumber('000000000000000000000000');
    const cds = 75000;
    const cdss = 75000;
    const cd = 1800000;
    const cdr = 2.16e7;
    const cdrr = 4.32e7;
    const cdslot = 40000;
    const cdf = 75000;
    const cdshot = 75000;
    const q = args.join(' ');
    const yuerel = args.length !== 0 ? args[0] : '';

    const isQuotedImage = quotedMsg && quotedMsg.type === 'image';
    const isQuotedVideo = quotedMsg && quotedMsg.type === 'video';
    const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt');
    const isQuotedFile = quotedMsg && quotedMsg.type === 'document';
    const isImage = type === 'image';

    const chats = type === 'chat' ? body : type === 'image' || type === 'video' ? caption : '';

    function restartAwal(tobz) {
      setting.restartState = false;
      isRestart = false;
      tobz.sendText(setting.restartId, 'Restart Succesfull!');
      setting.restartId = 'undefined';
      fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2));
    }

    const isMuted = (chatId) => {
      if (muted.includes(chatId)) {
        return false;
      } else {
        return true;
      }
    };

    function banChat() {
      if (banChats == true) {
        return false;
      } else {
        return true;
      }
    }

    function mtcs() {
      if (mtc == true) {
        return false;
      } else {
        return true;
      }
    }

    if (typeof Array.prototype.splice === 'undefined') {
      Array.prototype.splice = function (index, howmany, elemes) {
        howmany = typeof howmany === 'undefined' || this.length;
        var elems = Array.prototype.slice.call(arguments, 2),
          newArr = this.slice(0, index),
          last = this.slice(index + howmany);
        newArr = newArr.concat.apply(newArr, elems);
        newArr = newArr.concat.apply(newArr, last);
        return newArr;
      };
    }

    const sotoy = [
      '🍊 : 🍒 : 🍐',
      '🍒 : 🔔 : 🍊',
      '🍇 : 🍒 : 🍐',
      '🍊 : 🍋 : 🔔', //by Fadhlur Owner of NotBot
      '🔔 : 🍒 : 🍐',
      '🔔 : 🍒 : 🍊',
      '🍊 : 🍋 : 🔔',
      '🍐 : 🍒 : 🍋',
      '🍐 : 🍐 : 🍐',
      '🍊 : 🍒 : 🍒',
      '🔔 : 🔔 : 🍇',
      '🍌 : 🍒 : 🔔',
      '🍐 : 🔔 : 🔔',
      '🍊 : 🍋 : 🍒',
      '🍋 : 🍋 : 🍌',
      '🔔 : 🔔 : 🍇',
      '🔔 : 🍐 : 🍇',
      '🔔 : 🔔 : 🔔',
      '🍒 : 🍒 : 🍒',
      '🍌 : 🍌 : 🍌',
      '💎 : 💎 : 💎',
      '🍊 : 🍒 : 🍒',
      '🔔 : 🔔 : 🍇',
      '🍌 : 🍒 : 🔔',
      '🍐 : 🔔 : 🔔',
      '🍊 : 🍋 : 🍒',
      '🍋 : 🍋 : 🍌',
      '🔔 : 🔔 : 🍇',
      '🔔 : 🍐 : 🍇',
      '🍊 : 🍒 : 🍒',
      '🔔 : 🔔 : 🍇',
      '🍌 : 🍒 : 🔔',
      '🍐 : 🔔 : 🔔',
      '🍊 : 🍋 : 🍒',
      '🍋 : 🍋 : 🍌',
      '🔔 : 🔔 : 🍇',
      '🔔 : 🍐 : 🍇',
      '🍊 : 🍒 : 🍒',
      '🔔 : 🔔 : 🍇',
      '🍌 : 🍒 : 🔔',
      '🍐 : 🔔 : 🔔',
      '🍊 : 🍋 : 🍒',
      '🍋 : 🍋 : 🍌',
      '🔔 : 🔔 : 🍇',
      '🔔 : 🍐 : 🍇',
      '🍊 : 🍒 : 🍒',
      '🔔 : 🔔 : 🍇',
      '🍌 : 🍒 : 🔔',
      '🍐 : 🔔 : 🔔',
      '🍊 : 🍋 : 🍒',
      '🍋 : 🍋 : 🍌',
      '🔔 : 🔔 : 🍇',
      '🔔 : 🍐 : 🍇',
    ];

    const mess = {
      wait: `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`,
      follow: 'Jangan lupa follow ig https://instagram.com/bdrsmsdn yaa:)',
      notReg: `Maaf ${pushname}, sepertinya kamu belum terdaftar sebagai user Lucya, untuk pendaftaran bisa menggunakan *${prefix}verify*`,
      error: {
        St: `[❗] Kirim gambar dengan caption *${prefix}sticker* atau tag gambar yang sudah dikirim`,
        Ti: `[❗] Replay sticker dengan caption *${prefix}stickertoimg* atau tag sticker yang sudah dikirim`,
        Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
        Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
        Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
        Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
        Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
        Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
        Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
        Bk: '[❗] Bot tidak bisa memblockir Owner',
        Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
        Iv: '[❗] Link yang anda kirim tidak valid!',
      },
    };

    // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
    const levelRole = levell.getLevelingLevel(sender.id, level);
    var role = 'Bronze V';
    if (levelRole <= 1) {
      role = 'Bronze IV';
    } else if (levelRole <= 2) {
      role = 'Bronze III';
    } else if (levelRole <= 3) {
      role = 'Bronze II';
    } else if (levelRole <= 4) {
      role = 'Bronze I';
    } else if (levelRole <= 5) {
      role = 'Silver V';
    } else if (levelRole <= 6) {
      role = 'Silver IV';
    } else if (levelRole <= 7) {
      role = 'Silver III';
    } else if (levelRole <= 8) {
      role = 'Silver II';
    } else if (levelRole <= 9) {
      role = 'Silver I';
    } else if (levelRole <= 10) {
      role = 'Gold V';
    } else if (levelRole <= 11) {
      role = 'Gold IV';
    } else if (levelRole <= 12) {
      role = 'Gold III';
    } else if (levelRole <= 13) {
      role = 'Gold II';
    } else if (levelRole <= 14) {
      role = 'Gold I';
    } else if (levelRole <= 15) {
      role = 'Platinum V';
    } else if (levelRole <= 16) {
      role = 'Platinum IV';
    } else if (levelRole <= 17) {
      role = 'Platinum III';
    } else if (levelRole <= 18) {
      role = 'Platinum II';
    } else if (levelRole <= 19) {
      role = 'Platinum I';
    } else if (levelRole <= 20) {
      role = 'Diamond V';
    } else if (levelRole <= 21) {
      role = 'Diamond IV';
    } else if (levelRole <= 22) {
      role = 'Diamond III';
    } else if (levelRole <= 23) {
      role = 'Diamond II';
    } else if (levelRole <= 24) {
      role = 'Diamond I';
    } else if (levelRole <= 25) {
      role = 'Conqueror';
    } else if (levelRole <= 26) {
      role = 'Exterminator';
    } else if (levelRole <= 27) {
      role = 'Legend';
    } else if (levelRole <= 28) {
      role = 'Myth';
    } else if (levelRole > 28) {
      role = 'God';
    }

    //validator
    const apiKey = 'R73mNBEhc6LtUJP9JbN4'; // apikey you can get it at https://mhankbarbars.herokuapp.com/api
    const vhtear = 'K2021fuckoff789';
    const time = moment(t * 1000).format('DD/MM HH:mm:ss');
    const timu = moment(t * 1000).format('DD/MM/YYYY');
    const timi = moment(t * 1000)
      .add(30, 'days')
      .calendar();
    const tigiq = moment().format('DD MMMM YYYY HH:mm:ss');
    const botNumber = await tobz.getHostNumber();
    const blockNumber = await tobz.getBlockedIds();
    const groupId = isGroupMsg ? chat.groupMetadata.id : '';
    const groupAdmins = isGroupMsg ? await tobz.getGroupAdmins(groupId) : '';
    const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false;
    const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false;
    //const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
    const serial = sender.id;
    const isPrivate = sender.id === chat.contact.id;
    const isRegis = message ? regis.includes(sender.id) : false;

    const isAdmin = premium.checkPremiumUser(sender.id, admin);
    const isSeaFisher = fishh.checkFisher(sender.id, sea);
    const isOceanFisher = fishh.checkFisher(sender.id, ocean);
    const isForestHunter = huntt.checkHunter(sender.id, forest);
    premium.expiredCheck(admin);
    const isFisher = fishh.checkFisher(sender.id, fish);
    const isHunter = huntt.checkHunter(sender.id, hunt);
    const ownerNumber = '6281281817375@c.us'; // replace with your whatsapp number
    const isOwner = ownerNumber.includes(sender.id);
    const isBanned = banned.includes(sender.id);
    const isBlocked = blockNumber.includes(sender.id);
    const isMe = true;
    const isLevellingOn = isGroupMsg ? levelling.includes(chat.id) : false;
    const isAutoStikerOn = isGroupMsg ? autostiker.includes(chat.id) : false;
    const isReedem = reedem.includes(sender.id);
    //const isBw = isGroupMsg ? nobw.includes(chat.id) : false
    //const isAntilink = isGroupMsg ? antilink.includes(chat.id) : false
    const isMtc = mtc === true;
    const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';
    const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);
    const isWhite = (chatId) => (admin.includes(chatId) ? true : false);
    const isWhiteList = (chatId) => {
      if (admin.includes(sender.id)) {
        if (muted.includes(chatId)) return false;
        return true;
      } else {
        return false;
      }
    };

    const isBadWord = isGroupMsg ? badword.includes(chat.id) : false;
    const isNoLink = isGroupMsg ? NoLink.includes(chat.id) : false;
    const isVirtex = isGroupMsg ? virtex.includes(chat.id) : false;
    const AntiStickerSpam = isGroupMsg ? antisticker.includes(chat.id) : false;
    const url = args.length !== 0 ? args[0] : '';

    const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg';
    const errorurl = 'https://1.bp.blogspot.com/-Qr7Wq8rfjEA/X7zyydUwBfI/AAAAAAAALa0/DQCeziWRu4MNBhhcL-AbH4XnYQsil32hwCLcBGAsYHQ/w300-h640/WhatsApp%2BImage%2B2020-11-24%2Bat%2B18.33.52.jpeg';
    const errorurl2 = 'https://1.bp.blogspot.com/-Qr7Wq8rfjEA/X7zyydUwBfI/AAAAAAAALa0/DQCeziWRu4MNBhhcL-AbH4XnYQsil32hwCLcBGAsYHQ/w300-h640/WhatsApp%2BImage%2B2020-11-24%2Bat%2B18.33.52.jpeg';
    const errorImg = 'https://i.imgur.com/UxvMPUz.png';
    // FUNCTION
    function isMsgLimit(id) {
      if (isAdmin) {
        return false;
      }
      let found = false;
      for (let i of msgLimit) {
        if (i.id === id) {
          if (i.msg >= 12) {
            found === true;
            tobz.reply(from, '*[ANTI-SPAM]*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!', id);
            tobz.contactBlock(id);
            banned.push(id);
            fs.writeFileSync('./lib/database/user/banned.json', JSON.stringify(banned));
            return true;
          } else if (i.msg >= 7) {
            found === true;
            tobz.reply(from, '*[ANTI-SPAM]*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!', id);
            return true;
          } else {
            found === true;
            return false;
          }
        }
      }
      if (found === false) {
        let obj = { id: `${id}`, msg: 1 };
        msgLimit.push(obj);
        fs.writeFileSync('./lib/database/user/msgLimit.json', JSON.stringify(msgLimit));
        return false;
      }
    }

    function addMsgLimit(id) {
      if (isAdmin) {
        return;
      }
      var found = false;
      Object.keys(msgLimit).forEach((i) => {
        if (msgLimit[i].id == id) {
          found = i;
        }
      });
      if (found !== false) {
        msgLimit[found].msg += 1;
        fs.writeFileSync('./lib/database/user/msgLimit.json', JSON.stringify(msgLimit));
      }
    }

    function isLimit(id) {
      if (isAdmin) {
        return false;
      }
      let found = false;
      for (let i of limit) {
        if (i.id === id) {
          let limits = i.limit;
          if (limits >= limitCount) {
            found = true;
            tobz.reply(from, 'Limit kamu habis:(', id);
            return true;
          } else {
            limit;
            found = true;
            return false;
          }
        }
      }
      if (found === false) {
        let obj = { id: `${id}`, limit: 1 };
        limit.push(obj);
        fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
        return false;
      }
    }

    function limitAdd(id) {
      if (isAdmin) {
        return;
      }
      var found = false;
      Object.keys(limit).forEach((i) => {
        if (limit[i].id == id) {
          found = i;
        }
      });
      if (found !== false) {
        limit[found].limit += 1;
        fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
      }
    }

    function isPeluru(id) {
      if (isOwner) {
        return false;
      }
      let found = false;
      for (let i of peluru) {
        if (i.id === id) {
          let pelurs = i.peluru;
          if (pelurs >= peluruCount) {
            found = true;
            tobz.reply(from, 'Peluru kamu habis:(', id);
            return true;
          } else {
            peluru;
            found = true;
            return false;
          }
        }
      }
      if (found === false) {
        let obj = { id: `${id}`, peluru: 1 };
        peluru.push(obj);
        fs.writeFileSync('./lib/database/user/peluru.json', JSON.stringify(peluru));
        return false;
      }
    }

    function peluruAdd(id) {
      if (isOwner) {
        return;
      }
      var found = false;
      Object.keys(peluru).forEach((i) => {
        if (peluru[i].id == id) {
          found = i;
        }
      });
      if (found !== false) {
        peluru[found].peluru += 1;
        fs.writeFileSync('./lib/database/user/peluru.json', JSON.stringify(peluru));
      }
    }

    function isUmpan(id) {
      if (isOwner) {
        return false;
      }
      let found = false;
      for (let i of umpan) {
        if (i.id === id) {
          let umpans = i.umpan;
          if (umpans >= umpanCount) {
            found = true;
            tobz.reply(from, 'Umpan kamu habis:(', id);
            return true;
          } else {
            umpan;
            found = true;
            return false;
          }
        }
      }
      if (found === false) {
        let obj = { id: `${id}`, umpan: 1 };
        umpan.push(obj);
        fs.writeFileSync('./lib/database/user/umpan.json', JSON.stringify(umpan));
        return false;
      }
    }

    function umpanAdd(id) {
      if (isOwner) {
        return;
      }
      var found = false;
      Object.keys(umpan).forEach((i) => {
        if (umpan[i].id == id) {
          found = i;
        }
      });
      if (found !== false) {
        umpan[found].umpan += 1;
        fs.writeFileSync('./lib/database/user/umpan.json', JSON.stringify(umpan));
      }
    }

    function isStickerMsg(id) {
      if (isOwner) {
        return false;
      }
      let found = false;
      for (let i of stickerspam) {
        if (i.id === id) {
          if (i.stickerspam >= 5) {
            found === true;
            tobz.reply(from, '*[ANTI STICKER SPAM]*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh bot', id).then(() => {
              tobz.removeParticipant(groupId, id);
            });
            return true;
          } else if (i.stickerspam >= 3) {
            found === true;
            tobz.reply(from, '*[ANTI STICKER SPAM]*\nKamu terdeteksi spam sticker!\nMohon tidak spam sticker lagi atau nomor akan di kick oleh bot!', id);
            return true;
          } else {
            found === true;
            return false;
          }
        }
      }
      if (found === false) {
        let obj = { id: `${id}`, stickerspam: 1 };
        stickerspam.push(obj);
        fs.writeFileSync('./lib/database/group/stickerspam.json', JSON.stringify(stickerspam));
        return false;
      }
    }

    function addStickerCount(id) {
      if (isOwner) {
        return;
      }
      var found = false;
      Object.keys(stickerspam).forEach((i) => {
        if (stickerspam[i].id == id) {
          found = i;
        }
      });
      if (found !== false) {
        stickerspam[found].stickerspam += 1;
        fs.writeFileSync('./lib/database/group/stickerspam.json', JSON.stringify(stickerspam));
      }
    }

    function monospace(string) {
      return '```' + string + '```';
    }

    function isMedialimit(id) {
      if (isAdmin) {
        return false;
      }
      let found = false;
      for (let i of medialimit) {
        if (i.id === id) {
          let limitsa = i.medialimit;
          if (limitsa >= medialimitCount) {
            found = true;
            tobz.reply(from, 'Limit Media anda habis:(', id);
            return true;
          } else {
            medialimit;
            found = true;
            return false;
          }
        }
      }
      if (found === false) {
        let obj = { id: `${id}`, medialimit: 1 };
        medialimit.push(obj);
        fs.writeFileSync('./lib/database/user/medialimit.json', JSON.stringify(medialimit));
        return false;
      }
    }

    function MedialimitAdd(id) {
      if (isAdmin) {
        return;
      }
      var found = false;
      Object.keys(medialimit).forEach((i) => {
        if (medialimit[i].id == id) {
          found = i;
        }
      });
      if (found !== false) {
        medialimit[found].medialimit += 1;
        fs.writeFileSync('./lib/database/user/medialimit.json', JSON.stringify(medialimit));
      }
    }

    const addChangelog = (isi) => {
      let obj = { isi: `*${tigiq}*: \n${isi}` };
      cg.push(obj);
      fs.writeFileSync('./lib/database/cg.json', JSON.stringify(cg));
    };

    const getAllChangelog = () => {
      const array = [];
      Object.keys(cg).forEach((i) => {
        array.push(cg[i].isi);
      });
      return array;
    };

    const addWaktu = (time) => {
      let obj = { waktu: Date.now() + toMs(time) };
      estimate.push(obj);
      fs.writeFileSync('./lib/database/est.json', JSON.stringify(estimate));
    };

    const getWaktu = (userId) => {
      let position = false;
      Object.keys(estimate).forEach((i) => {
        if (estimate[i].id === userId) {
          position = i;
        }
      });
      if (position !== false) {
        return estimate[position].waktu;
      }
    };

    const getWaktuPosition = (userId) => {
      let position = null;
      Object.keys(estimate).forEach((i) => {
        if (estimate[i].id === userId) {
          position = i;
        }
      });
      return position;
    };

    // Serial Number Generator
    function GenerateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Generates a random alphanumberic character
    function GenerateRandomChar() {
      var chars = '1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ';
      var randomNumber = GenerateRandomNumber(0, chars.length - 1);
      return chars[randomNumber];
    }
    // Generates a Serial Number, based on a certain mask
    function GenerateSerialNumber(mask) {
      var serialNumber = '';
      if (mask != null) {
        for (var i = 0; i < mask.length; i++) {
          var maskChar = mask[i];
          serialNumber += maskChar == '0' ? GenerateRandomChar() : maskChar;
        }
      }
      return serialNumber;
    }

    // END FUNCTION
    if (isGroupMsg && isNoLink && !isGroupAdmins && !isAdmin && !isOwner) {
      if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
        const check = await tobz.inviteInfo(chats);
        if (!check) {
          return;
        } else {
          console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'));
          await tobz.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu dikick karena mengirimkan link group lain!`, id);
          await tobz.removeParticipant(groupId, sender.id);
        }
      }
    }
    // MRHRTZ
    if (isGroupMsg && isBadWord) {
      if (bad.includes(chats)) {
        //if (!isBadWord) return tobz.reply(from, 'Fitur ANTI BADWORD belum Aktif Pak', id)
        if (!isGroupAdmins) {
          return tobz
            .reply(from, 'JAGA UCAPAN DONG!! 😠', id)
            .then(() => tobz.removeParticipant(groupId, sender.id))
            .then(() => {
              tobz.sendText(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`);
            })
            .catch(() => tobz.sendText(from, `Untung lulu bukan admin, kalo admin udah lulu kick!`));
        } else {
          return tobz.reply(from, 'Tolong Jaga Ucapan Min 😇', id);
        }
      }
    }

    if (!isGroupMsg) {
      if (bad.includes(chats)) {
        tobz.reply(from, 'JAGA UCAPAN DONG!!😠', id);
        banned.push(serial);
        fs.writeFileSync('./lib/database/user/banned.json', JSON.stringify(banned));
      }
    }

    // Leveling [BETA] by Slavyan
    if (isRegis && isCmd) {
      const currentLevel = levell.getLevelingLevel(sender.id, level);
      const checkId = levell.getLevelingId(sender.id, level);
      const checkBg = card.getBg(sender.id, _bg);
      try {
        if (currentLevel === undefined && checkId === undefined) levell.addLevelingId(sender.id, level);
        if (checkBg === undefined) card.addBg(sender.id, _bg);
        const amountXp = Math.floor(Math.random() * 10) + 300;
        const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1);
        const getLevel = levell.getLevelingLevel(sender.id, level);
        levell.addLevelingXp(sender.id, amountXp, level);
        if (requiredXp <= levell.getLevelingXp(sender.id, level)) {
          levell.addLevelingLevel(sender.id, 1, level);
          const fetchXp = 3000 * (Math.pow(2, levell.getLevelingLevel(sender.id, level)) - 1);
          await tobz.reply(
            from,
            `*「 LEVEL UP 」*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${levell.getLevelingXp(sender.id, level)} / ${fetchXp}\n➸ *Level*: ${getLevel} -> ${levell.getLevelingLevel(sender.id, level)} 🆙 \n➸ *Role*: *${role}*`,
            id
          );
        }
      } catch (err) {
        console.error(err);
      }
    }

    // addfilter-----------------------------------------------------------------------

    // Auto-stiker
    if (isGroupMsg && isAutoStikerOn && isMedia && isImage && !isCmd) {
      const mediaData = await decryptMedia(message, uaOverride);
      const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`;
      await tobz
        .sendImageAsSticker(from, imageBase64, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' })
        .then(async () => {
          console.log(`Sticker processed for ${processTime(t, moment())} seconds`);
        })
        .catch(async (err) => {
          console.error(err);
          await tobz.reply(from, `Error!\n${err}`, id);
        });
    }

    if (body === `${prefix}mute` && isMuted(chatId) == true) {
      if (isGroupMsg) {
        if (!isGroupAdmins) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin Lucya!', id);
        if (isMsgLimit(serial)) {
          return;
        } else {
          addMsgLimit(serial);
        }
        muted.push(chatId);
        fs.writeFileSync('./lib/database/user/muted.json', JSON.stringify(muted, null, 2));
        tobz.reply(from, `Bot telah di mute pada chat ini! ${prefix}unmute untuk unmute`, id);
      } else {
        if (isMsgLimit(serial)) {
          return;
        } else {
          addMsgLimit(serial);
        }
        muted.push(chatId);
        fs.writeFileSync('./lib/database/user/muted.json', JSON.stringify(muted, null, 2));
        reply(from, `Bot telah di mute pada chat ini! ${prefix}unmute untuk unmute!`, id);
      }
    }
    if (body === `${prefix}unmute` && isMuted(chatId) == false) {
      if (isGroupMsg) {
        if (!isGroupAdmins) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin Lucya!', id);
        if (isMsgLimit(serial)) {
          return;
        } else {
          addMsgLimit(serial);
        }
        let index = muted.indexOf(chatId);
        muted.splice(index, 1);
        fs.writeFileSync('./lib/database/user/muted.json', JSON.stringify(muted, null, 2));
        tobz.reply(from, 'Bot telah di unmute!', id);
      } else {
        if (isMsgLimit(serial)) {
          return;
        } else {
          addMsgLimit(serial);
        }
        let index = muted.indexOf(chatId);
        muted.splice(index, 1);
        fs.writeFileSync('./lib/database/user/muted.json', JSON.stringify(muted, null, 2));
        tobz.reply(from, 'Bot telah di unmute!', id);
      }
    }

    if (body === `${prefix}mtcstop`) {
      if (!isOwner) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner Lucya!', id);
      if (setting.mtc === false) return;
      setting.mtc = false;
      mtc = false;
      fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2));
      tobz.reply(from, 'Maintenance stopped!', id);
    }
    if (args.includes('terima kasih') || args.includes('makasih') || args.includes('terimakasih') || args.includes('thank you') || args.includes('thanks')) {
      tobz.reply(from, `sama-sama ${pushname}💖`, id);
    }
    if (body === `${prefix}unbanchat`) {
      if (!isOwner) return tobz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner Lucya!', id);
      if (setting.banChats === false) return;
      setting.banChats = false;
      banChats = false;
      fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2));
      tobz.reply('Global chat has been disable!');
    }

    // AUTO DELETE MESSAGE NON-CMD
    if (!isGroupMsg && !isCmd) {
      await sleep(180000);
      tobz.deleteChat(chatId);
    }

    //ANTI VIRTEX
    if (isGroupMsg && isVirtex) {
      if (chats.length > 9999) {
        tobz.reply(from, 'Jangan kirim pesan yang terlalu panjang! atau Lucya anggap virus!', id);
        await tobz.reply(
          from,
          `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhalo\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhehe\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\njangan\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlupa\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfollow\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nig\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nyaa\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@bdrsmsdn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhmm\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*FOLLOW IG @bdrsmsdn*`,
          id
        );
        //await sleep(2000)
        tobz.removeParticipant(groupId, serial);
      }
    }

    // [BETA] Avoid Spam Message
    if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg && !isOwner) {
      return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname));
    }
    if (isCmd && msgFilter.isFiltered(from) && isGroupMsg && !isOwner) {
      return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle));
    }
    //
    if (isCmd && !isGroupMsg) {
      console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname));
    }
    if (isCmd && isGroupMsg) {
      console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle));
    }

    // [BETA] Avoid Spam Message
    msgFilter.addFilter(from);

    // AUTO READ MESSAGEf
    tobz.sendSeen(chatId);

    //TELL TO USER's WHEN BOT IS MAINTENANCE
    const cekEst = ms(getWaktu() - Date.now());
    if (isMtc && isCmd && !isOwner) return tobz.reply(from, `Bot sedang dalam maintenance. Mohon tunggu sekitar ${cekEst.hours} jam ${cekEst.minutes} menit ${cekEst.seconds} detik.`, id);

    //BANNED USER
    if (isBanned && isCmd) return tobz.reply(from, 'Nomor anda dibanned karena terindikasi melakukan pelanggaran!', id);

    //IGNORE
    if ((isMuted(chatId) && banChat() && !isBlocked && !isBanned && mtcs()) || isOwner) {
      switch (command) {
        //owner menu----------------------------------------------------------------------------------------------------------------------------
        case '>>':
          const q = body.slice(3);
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner!', id);
          if (!q) return tobz.reply(from, 'Harap masukkan code JavaScript!', id);
          try {
            let evaled = await eval(q);
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            tobz.sendText(from, evaled);
          } catch (err) {
            tobz.reply(from, err, id);
          }
          break;
        case prefix + 'update':
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id);
          const cgg = body.slice(8);
          addChangelog(cgg);
          await tobz.reply(from, 'Berhasil menambahkan update ke changelog!', id);

          break;
        case prefix + 'newfeature':
        case prefix + 'changelog':
          {
            let fult = '-----[ *CHANGELOG LUCYA-BOT* ]----\n\n';
            let fut = cg;
            let nome = '➥';
            const arrayFilter = [];
            const filteq = getAllChangelog();
            for (let i = 0; i < filteq.length; i++) {
              arrayFilter.push(filteq[i]);
              fult += `${nome} ${filteq[i]}\n\n`;
            }
            await tobz.reply(from, fult, id);
          }
          break;
        case prefix + 'cls':
        case prefix + 'clean':
          tobz.reply(
            from,
            `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhalo\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhehe\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\njangan\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlupa\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfollow\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nig\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nyaa\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@bdrsmsdn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhmm\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*FOLLOW IG @bdrsmsdn*`,
            id
          );
          break;
        case prefix + 'joingrup':
        case prefix + 'joingroup':
        case prefix + 'joingrup1':
        case prefix + 'joingroup1':
          tobz.reply(from, 'Lucya akan menambahkanmu ke dalam grup! Jangan diprivate yaa..\n\natau masuk melalui link berikut: https://chat.whatsapp.com/LuZkEtgJz4kI6cOkAeHL5j', id);
          break;
        // case prefix+'joingrup':
        //     await tobz.addParticipant('6281281817375-1611739156@g.us', serial)
        // break
        case prefix + 'joingrup2':
        case prefix + 'joingroup2':
          tobz.reply(from, 'Lucya akan menambahkanmu ke dalam grup! Jangan diprivate yaa..\n\natau masuk melalui link berikut: https://chat.whatsapp.com/G0MEd2wMcJhKupMqrWI6fB', id);
          break;
        case prefix + 'joingrup3':
        case prefix + 'joingroup3':
          tobz.reply(from, 'Lucya akan menambahkanmu ke dalam grup! Jangan diprivate yaa..\n\natau masuk melalui link berikut: https://chat.whatsapp.com/Kjk7PBhideSLf0Wcm05suz', id);
          break;
        case prefix + 'sendto':
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id);
          tobz.sendFile(from, './tobz.js', 'tobz.js');

          break;
        case prefix + 'runtime': // BY HAFIZH
          const formater = (seconds) => {
            const pad = (s) => {
              return (s < 10 ? '0' : '') + s;
            };
            const hrs = Math.floor(seconds / (60 * 60));
            const mins = Math.floor((seconds % (60 * 60)) / 60);
            const secs = Math.floor(seconds % 60);
            return ' ' + pad(hrs) + 'jam ' + pad(mins) + 'menit ' + pad(secs) + 'detik';
          };
          const uptime = process.uptime();
          await tobz.reply(from, `Lucya sudah berjalan selama ${formater(uptime)}`, id);

          break;
        case `${prefix}rep`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id);
          const nuro = args[1];
          const resper = buyerr.getPembeli(nuro, premer);
          let inxwe = premer.indexOf(resper);
          if (inxwe === true) {
            const rep = body.slice(5 + resper.length);
            const repq = `*「 PESAN DARI OWNER 」*\n\n${rep}\n\nBalas pesan ini dengan ${prefix}toadmin <message>`;
            tobz.sendText(resper, repq, id);
            await tobz.reply(from, 'Berhasil mengirim pesan!', id);
          } else {
            const rep = body.slice(5 + args[1].length);
            const repq = `*「 PESAN DARI OWNER 」*\n\n${rep}\n\nBalas pesan ini dengan ${prefix}toadmin <message>`;
            tobz.sendText(nuro, repq, id);
            await tobz.reply(from, 'Berhasil mengirim pesan!', id);
          }

          break;
        case `${prefix}toadmin`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if ((isMedia && isImage) || isQuotedImage) {
            const mediaData = await decryptMedia(message, uaOverride);
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`;
            const opo = body.slice(9);
            const ip = `\n\npesan dari : ${pushname}\n${chat.id}\n${opo}`;
            tobz.sendImage('6281281817375@c.us', imageBase64, 'gambar.jpg', ip, id).then(() => tobz.reply(from, 'Berhasil mengirim pesan\nTunggu owner membalas pesan ya!', id));
          } else if (args.length >= 1) {
            const opo = body.slice(9);
            tobz.sendText('6281281817375@c.us', `${opo}\n\npesan dari : ${pushname}\n${chat.id}`).then(() => tobz.reply(from, 'Berhasil mengirim pesan\nTunggu owner membalas pesan ya!', id));
          } else {
            await tobz.reply(from, 'Format salah! Untuk membuka daftar perintah kirim !help', id);
          }

          break;
        case prefix + `mtcstart`:
          {
            if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id);
            const este = args[1];
            const estem = ms(toMs(este));
            if (setting.mtc === true) return;
            setting.mtc = true;
            mtc = true;
            addWaktu(este);
            fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2));
            await tobz.reply(from, `Maintenance dimulai! Durasi ${estem.hours} jam ${estem.minutes} menit ${estem.seconds} detik`, id);
            const intervRemind = setInterval(async () => {
              if (Date.now() > getWaktu()) {
                await tobz.sendText('6281281817375@c.us', `Maintenance nya udah belum?`, id);
                estimate.splice(getWaktuPosition(), 1);
                fs.writeFileSync('./lib/database/est.json', JSON.stringify(estimate));
                clearInterval(intervRemind);
              }
            }, 1000);
          }

          break;
        case `>activate`:
          {
            //if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id)
            const esteq = '3m';
            const estemq = ms(toMs(esteq));
            addWaktu(esteq);
            await tobz.reply(from, `Berhasil mendaftarkan group!`, id);
            const intervRemind = setInterval(async () => {
              if (Date.now() > getWaktu()) {
                await tobz.sendText(from, `Terima kasih sudah menggunakan jasa bot Lucya, lucya pamit yaa..`, id).then(() => tobz.leaveGroup(groupId));
                estimate.splice(getWaktuPosition(), 1);
                fs.writeFileSync('./lib/database/est.json', JSON.stringify(estimate));
                clearInterval(intervRemind);
              }
            }, 1000);
          }

          break;
        case `${prefix}banchat`:
          if (setting.banChats === true) return;
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id);
          setting.banChats = true;
          banChats = true;
          fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2));
          tobz.reply('Global chat has been enable!');

          break;
        case `prefix`:
          tobz.reply(
            from,
            `*Lucya is Use ( ${prefix} ) Prefix!.* 
_Prefix adalah tanda di awal perintah._
_Contoh: ${prefix}menu_`,
            id
          );

          break;
        case `${prefix}setprefix`:
          if (!isOwner) return tobz.reply(from, 'Maaf, Fitur ini hanya untuk OWNER dan ADMIN Lucya!', id);
          if (args.length === 1)
            return tobz.reply(
              from,
              `*Kirim Perintah ${prefix}setto [prefix baru]*. 
Contoh: ${prefix}setprefix #`,
              id
            );
          const pf = body.slice(11);
          setting.prefix = `${pf}`;
          prefix = `${pf}`;
          fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2));
          tobz.reply(from, `Change Prefix To ${pf} SUCCESS!`, id);

          break;
        case `${prefix}listbanned`:
          let bened = `This is list of banned number\nTotal : ${banned.length}\n`;
          for (let i of banned) {
            bened += `➸ ${i.replace(/@c.us/g, '')}\n`;
          }
          await tobz.reply(from, bened, id);

          break;
        case `${prefix}block`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner', id);
          for (let i = 0; i < mentionedJidList.length; i++) {
            let block = `${mentionedJidList[i]}`;
            await tobz.contactBlock(block).then((a) => {
              console.log(a);
              tobz.reply(from, `Success block ${args[1]}!`, id);
            });
          }

          break;
        case `${prefix}blok`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner', id);
          if (args.length >= 2) {
            let block = `${args[1]}@c.us`;
            await tobz.contactBlock(block).then(() => {
              return tobz.reply(from, `Sukses blok ${args[1]}!`, id);
            });
            return;
          }

          break;
        case `${prefix}unblock`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner', id);
          for (let i = 0; i < mentionedJidList.length; i++) {
            let unblock = `${mentionedJidList[i]}`;
            await tobz.contactUnblock(unblock).then((a) => {
              console.log(a);
              tobz.reply(from, `Success unblok ${args[1]}!`, id);
            });
          }

          break;
        case `${prefix}unblok`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner', id);
          if (args.length >= 2) {
            let unblock = `${args[1]}@c.us`;
            await tobz.contactUnblock(unblock).then(() => {
              tobz.reply(from, `Sukses unblok ${args[1]}!`, id);
            });
            return;
          }

          break;
        case 'tes':
          //if (isOwner) return
          tobz.reply(from, 'Ok', id);

          break;
        case `${prefix}join`:
          if (!isOwner) return tobz.reply(from, 'Silakan hubungi Owner untuk mengundang Lucya ke dalam Grup. Ketik !owner', id);
          if (args.length < 2) return tobz.reply(from, 'Silakan hubungi Owner untuk mengundang bot ke dalam Grup. Ketik !owner', id);
          const link = args[1];
          const tGr = await tobz.getAllGroups();
          const minMem = 2;
          const check = await tobz.inviteInfo(link);
          const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi);
          if (!isLink) return tobz.reply(from, 'Ini link? 👊🤬', id);
          if (tGr.length > 100) return tobz.reply(from, 'Maaf jumlah group sudah maksimal!', id);
          if (check.size < minMem) return tobz.reply(from, 'Member group tidak melebihi 2, Lucya tidak bisa masuk', id);
          if (check.status === 200) {
            await tobz.joinGroupViaLink(link).then(() => tobz.reply(from, 'Lucya akan segera masuk!', id));
          } else {
            tobz.reply(from, 'Link group tidak valid!', id);
          }

          break;
        case `${prefix}getses`:
          if (!isOwner) return tobz.reply(from, 'Fitur ini hanya untuk Owner Lucya!, id');
          const sesPic = await tobz.getSnapshot();
          tobz.sendFile(from, sesPic, 'session.png', 'Nih...', id);

          break;
        case `${prefix}listblock`:
        case `${prefix}listblok`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`;
          for (let i of blockNumber) {
            hih += `➸ @${i.replace(/@c.us/g, '')}\n`;
          }
          tobz.sendTextWithMentions(from, hih, id);

          break;
        case prefix + 'premiumlist':
        case prefix + 'listprem':
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          let listPremi = '「 *PREMIUM USER LIST* 」\n\n';
          let nomorList = 0;
          const arrayPremi = [];
          const prem = premium.getAllPremiumUser(admin);
          for (let i = 0; i < prem.length; i++) {
            arrayPremi.push(await tobz.getContact(prem[i]));
            const cekExpp = ms(premium.getPremiumExpired(prem[i], admin) - Date.now());
            listPremi += `👑 ${prem[i].replace(/@c.us/g, '')}\n➸ *Expired*: ${cekExpp.days} day(s) ${cekExpp.hours} hour(s) ${cekExpp.minutes} minute(s)\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n`;
          } //➸ *Name*: ${arrayPremi[i].pushname}\n
          await tobz.reply(from, listPremi, id);

          break;
        case `${prefix}list`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya untuk Owner!', id);
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          let rgs = `Registered User\nTotal : ${regis.length}\n`;
          for (let i of regis) {
            rgs += `➸ ${i.replace(/@c.us/g, '')}\n`;
          }
          await tobz.reply(from, rgs, id);

          break;
        case prefix + 'prem':
          if (!isOwner) return await tobz.reply(from, 'Perintah ini hanya untuk Owner!', id);
          if (mentionedJidList.length !== 0) {
            for (let benet of mentionedJidList) {
              if (benet === botNumber) return await tobz.reply(from, 'Bot tidak bisa menjadi premium!:)', id);
              premium.addPremiumUser(benet, args[2], admin);
              await tobz.reply(
                from,
                `
────「 *PREMIUM👑* 」───
+ *Number*\t: ${benet.replace(/@c.us/g, '')}
+ *Status*\t\t: *ACTIVE*
+ *Code*\t\t\t: *SN-${SN}*
+ *Since*\t\t\t: ${timu}
+ *Expired*\t\t: 
${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)
Thx for Upgrade to Premium🥰
──────「 *LUCYA* 」────`,
                id
              );
            }
          } else {
            premium.addPremiumUser(args[1] + '@c.us', args[2], admin);
            await tobz.reply(
              from,
              `
────「 *PREMIUM👑* 」───
+ *Number*\t: ${args[1]}
+ *Status*\t\t: *ACTIVE*
+ *Code*\t\t\t: *SN-${SN}*
+ *Since*\t\t\t: ${timu}
+ *Expired*\t\t: 
${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)
Thx for Upgrade to Premium🥰
──────「 *LUCYA* 」────`,
              id
            );
          }

          break;
        case prefix + 'delprem':
          if (!isOwner) return await tobz.reply(from, 'Perintah ini hanya untuk Owner!', id);
          if (mentionedJidList.length !== 0) {
            if (mentionedJidList[0] === botNumber) return await tobz.reply(from, 'Bot tidak bisa menjadi premium!:)', id);
            admin.splice(premium.getPremiumPosition(mentionedJidList[0], admin), 1);
            fs.writeFileSync('./lib/database/user/admin.json', JSON.stringify(admin));
            await tobz.reply(
              from,
              `
╭────「 *PREMIUM👑* 」──
│+ *Number* : ${mentionedJidList[0].replace(/@c.us/g, '')}
│+ *Status* : *DEACTIVE*
│ See u for next order🙂
╰──────「 *LUCYA* 」────`,
              id
            );
          } else {
            admin.splice(premium.getPremiumPosition(args[1] + '@c.us', admin), 1);
            fs.writeFileSync('./lib/database/user/admin.json', JSON.stringify(admin));
            await tobz.reply(
              from,
              `
╭────「 *PREMIUM👑* 」──
│+ *Number* : ${args[1]}
│+ *Status* : *DEACTIVE*
│ See u for next order🙂
╰──────「 *LUCYA* 」────`,
              id
            );
          }

          break;
        case `${prefix}ban`:
          if (!isOwner) return tobz.reply(from, 'Hanya Owner Lucya yang bisa!:p', id);
          for (let i = 0; i < mentionedJidList.length; i++) {
            banned.push(mentionedJidList[i]);
            fs.writeFileSync('./lib/database/user/banned.json', JSON.stringify(banned));
            tobz.reply(from, 'Succes ban target!', id);
          }

          break;
        case `${prefix}banned`:
          if (!isOwner) return tobz.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner', id);
          if (args.length >= 2) {
            const band = `${args[1]}@c.us`;
            banned.push(band);
            fs.writeFileSync('./lib/database/user/banned.json', JSON.stringify(banned));
            tobz.reply(from, 'Succes ban target!', id);
          }

          break;
        case `${prefix}unban`:
          if (!isOwner) return tobz.reply(from, 'Hanya Owner Lucya yang bisa:p', id);
          let inax = banned.indexOf(mentionedJidList[0]);
          banned.splice(inax, 1);
          fs.writeFileSync('./lib/database/user/banned.json', JSON.stringify(banned));
          tobz.reply(from, 'Unbanned User!', id);

          break;
        case `${prefix}unbanned`:
          if (!isOwner) return tobz.reply(from, 'Hanya Owner Lucya yang bisa:p', id);
          const inaxq = banned.indexOf(`${args[1]}@c.us`);
          banned.splice(inaxq, 1);
          fs.writeFileSync('./lib/database/user/banned.json', JSON.stringify(banned));
          tobz.reply(from, 'Unbanned User!', id);

          break;

        //primary menu-----------------------------------------------------------------------------------------------
        case `${prefix}verify`:
          if (isRegis) return tobz.reply(from, 'Nomor anda sudah terverifikasi!', id);
          var pic = await tobz.getProfilePicFromServer(author);
          arg = body.trim().split('|');
          const nimi = pushname;
          const nimir = serial.replace(/@c.us/g, '');
          const texts = serial;
          regis.push(texts);
          fs.writeFileSync('./lib/data/regis.json', JSON.stringify(regis));
          if (pic == undefined) {
            var pfp = errorurl;
          } else {
            var pfp = pic;
          }
          await tobz.sendFileFromUrl(
            from,
            pfp,
            'pfp.jpg',
            `╭───「 *REGISTRASI* 」───
│++
│+ *Nama* : ${nimi}
│+ *Nomor* : wa.me/${nimir}
│
╰───────────────────
Terima kasih telah melakukan verifikasi. Baca Syarat dan Ketentuan bot di ${prefix}snk yaa. 
➥ Follow instagram untuk mendapatkan reedem code https://instagram.com/bdrsmsdn
➥ Jangan lupa join Group Official Informasi agar selalu update mengenai perkembangan bot. Ketik ${prefix}lucyagroup

Total user terdaftar : ${regis.length}

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

               *_AKSARA_*`,
            id
          );

          break;
        case `${prefix}unreg`: //menghapus nomor from
          //if (!isOwner) return tobz.reply(from, 'Fitur ini hanya dapat digunakan oleh Owner Lucya')
          if (args.length === 1) return tobz.reply(from, 'Masukkan nomornya, *GUNAKAN AWALAN 62* contoh: 6281281817375');
          let inx = regis.indexOf(args[1] + '@c.us');
          regis.splice(inx, 1);
          fs.writeFileSync('./lib/data/regis.json', JSON.stringify(regis));
          tobz.reply(from, 'Sukses menghapus nomor from', id);

          break;
        case `${prefix}bait`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isOwner) return tobz.reply(from, `Sisa umpan untuk kamu mancing tersisa : *UNLIMITED*\n\n_Note : Kamu dapat membeli umpan di ${prefix}shop_`, id);
            var found = false;
            const limidat = JSON.parse(fs.readFileSync('./lib/database/user/umpan.json'));
            for (let lmt of limidat) {
              if (lmt.id === serial) {
                let limitCounts = umpanCount - lmt.umpan;
                if (limitCounts <= 0) return tobz.reply(from, `Sisa umpan untuk kamu mancing sudah habis\n\n_Note : Kamu dapat membeli umpan di ${prefix}shop_`, id);
                tobz.reply(from, `Sisa umpan untuk kamu mancing tersisa : *${limitCounts}*\n\n_Note : Kamu dapat membeli umpan di ${prefix}shop_`, id);
                found = true;
              }
            }
            //console.log(limit)
            //console.log(limidat)
            if (found === false) {
              let obj = { id: `${serial}`, umpan: 1 };
              umpan.push(obj);
              fs.writeFileSync('./lib/database/user/umpan.json', JSON.stringify(umpan, 1));
              tobz.reply(from, `Sisa umpan untuk kamu mancing tersisa : *${limitCounts}*\n\n_Note : Kamu dapat membeli umpan di ${prefix}shop_`, id);
            }
          }

          break;
        case `${prefix}bullet`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isOwner) return tobz.reply(from, `Sisa peluru untuk kamu berburu tersisa : *UNLIMITED*\n\n_Note : Kamu dapat membeli peluru di ${prefix}shop_`, id);
            var found = false;
            const limidat = JSON.parse(fs.readFileSync('./lib/database/user/peluru.json'));
            for (let lmt of limidat) {
              if (lmt.id === serial) {
                let limitCounts = peluruCount - lmt.peluru;
                if (limitCounts <= 0) return tobz.reply(from, `Sisa peluru untuk kamu berburu sudah habis\n\n_Note : Kamu dapat membeli peluru di ${prefix}shop_`, id);
                tobz.reply(from, `Sisa peluru untuk kamu berburu tersisa : *${limitCounts}*\n\n_Note : Kamu dapat membeli peluru di ${prefix}shop_`, id);
                found = true;
              }
            }
            //console.log(limit)
            //console.log(limidat)
            if (found === false) {
              let obj = { id: `${serial}`, peluru: 1 };
              peluru.push(obj);
              fs.writeFileSync('./lib/database/user/peluru.json', JSON.stringify(peluru, 1));
              tobz.reply(from, `Sisa peluru untuk kamu berburu tersisa : *${limitCounts}*\n\n_Note : Kamu dapat membeli peluru di ${prefix}shop_`, id);
            }
          }

          break;
        case `${prefix}limit`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (isAdmin) return tobz.reply(from, `Sisa limit request anda tersisa : *UNLIMITED*\n\n_Note : Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop_`, id);
          var found = false;
          const limidat = JSON.parse(fs.readFileSync('./lib/database/user/limit.json'));
          for (let lmt of limidat) {
            if (lmt.id === serial) {
              let limitCounts = limitCount - lmt.limit;
              if (limitCounts <= 0) return tobz.reply(from, `Limit request anda sudah habis\n\n_Note : Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop_`, id);
              tobz.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop_`, id);
              found = true;
            }
          }
          //console.log(limit)
          //console.log(limidat)
          if (found === false) {
            let obj = { id: `${serial}`, limit: 1 };
            limit.push(obj);
            fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit, 1));
            tobz.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop_`, id);
          }

          break;
          //LEVEL BY SLAVYAN
          // case prefix + 'level':
          //   if (!isRegis) return tobz.reply(from, mess.notReg, id);
          //   //if (!isLevellingOn) return await tobz.reply(from, 'Fitur Levelling belum diaktifkan!', id)
          //   //if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di dalam grup!', id)
          //   const userLevel = levell.getLevelingLevel(sender.id, level);
          //   const userXp = levell.getLevelingXp(sender.id, level);
          //   if (userLevel === undefined && userXp === undefined) return await tobz.reply(from, ind.levelNull(), id);
          //   const ppLink = await tobz.getProfilePicFromServer(sender.id);
          //   if (ppLink === undefined) {
          //     var pepe = errorurl;
          //   } else {
          //     pepe = ppLink;
          //   }
          //   const bege = card.getBg(sender.id, _bg);
          //   const requiredXp = 3000 * (Math.pow(2, userLevel) - 1);
          //   const randomHexs = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;
          //   const randomHex = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;
          //   const rank = new canvas.Rank()
          //     .setAvatar(pepe)
          //     .setLevel(userLevel)
          //     .setRank(1, `${role}`, true) // Set value to true if you want to display user's roles
          //     .setCurrentXP(userXp)
          //     .setRequiredXP(requiredXp)
          //     .setProgressBar([randomHexs, randomHex], 'GRADIENT')
          //     .setBackground('IMAGE', bege)
          //     .setUsername(pushname)
          //     .setDiscriminator(sender.id.substring(6, 10));
          //   rank
          //     .build()
          //     .then(async (buffer) => {
          //       canvas.write(buffer, `${pushname}_card.png`);
          //       await tobz.sendFile(from, `${pushname}_card.png`, `${pushname}_card.png`, '', id);
          //       fs.unlinkSync(`${pushname}_card.png`);
          //     })
          //     .catch(async (err) => {
          //       console.error(err);
          //       await tobz.reply(from, 'Error!', id);
          //     });

          break;
        case prefix + 'imagetourl':
        case prefix + 'imgtourl':
          if ((isMedia && isImage) || isQuotedImage) {
            await tobz.reply(from, mess.wait, id);
            const encryptMedia = isQuotedImage ? quotedMsg : message;
            const mediaData = await decryptMedia(encryptMedia, uaOverride);
            const linkImg = await uploadImages(mediaData, `${sender.id}_img`);
            await tobz.reply(from, linkImg, id);
          } else {
            await tobz.reply(from, 'format salah!', id);
          }

          break;
        case prefix + 'setbackground':
        case prefix + 'setbg':
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          //if (!isLevellingOn) return await tobz.reply(from, 'Fitur Levelling belum diaktifkan!', id)
          //if (!isGroupMsg) return await tobz.reply(from, 'Perintah ini hanya bisa dilakukan di dalam grup!', id)
          const levels = levell.getLevelingLevel(sender.id, level);
          const xps = levell.getLevelingXp(sender.id, level);
          if (levels === undefined && xps === undefined) return await tobz.reply(from, 'Level anda masih 0', id);
          if ((isMedia && isImage) || isQuotedImage) {
            const encryptMedia = isQuotedImage ? quotedMsg : message;
            const mediaData = await decryptMedia(encryptMedia, uaOverride);
            const link = await uploadImages(mediaData, `${sender.id}_bg`);
            card.replaceBg(sender.id, link, _bg);
            await tobz.reply(from, 'Success set new background!', id);
          } else {
            await tobz.reply(from, 'Format salah!', id);
          }

          break;
        case prefix + 'topfisher':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            const resp = fish;
            const arraylb = [];
            resp.sort((a, b) => (a.fish1 + a.fish2 + a.fish3 + a.gurita + a.cumi + a.udang + a.lobster + a.hiu + a.paus < b.fish1 + b.fish2 + b.fish3 + b.gurita + b.cumi + b.udang + b.lobster + b.hiu + b.paus ? 1 : -1));
            let leaderboard = '-----[ *TOP FISHER* ]----\n\n';
            let nom = 0;
            for (let i = 0; i < 10; i++) {
              const a = resp[i].fish1 * 500;
              const b = resp[i].fish2 * 1000;
              const c = resp[i].fish3 * 100;
              const d = resp[i].gurita * 5000;
              const e = resp[i].cumi * 2000;
              const f = resp[i].udang * 1500;
              const g = resp[i].lobster * 3000;
              const h = resp[i].hiu * 50000;
              const l = resp[i].paus * 100000;
              const j = a + b + c + d + e + f + g + h + l;
              nom++;
              arraylb.push(await tobz.getContact(fishh.getAllFisher(fish)[i]));
              leaderboard += `${nom}. wa.me/${resp[i].id.replace('@c.us', '')}\n➸ 🐡: *${resp[i].fish1}*, 🐠: *${resp[i].fish2}*, 🐟: *${resp[i].fish3}*\n➸ 🦑: *${resp[i].cumi}*, 🦐: *${resp[i].udang}*, 🦞: *${resp[i].lobster}*\n➸ 🐙: *${
                resp[i].gurita
              }*, 🦈: *${resp[i].hiu}*, 🐋: *${resp[i].paus}*\n➸ Total : ${
                resp[i].fish1 + resp[i].fish2 + resp[i].fish3 + resp[i].cumi + resp[i].udang + resp[i].lobster + resp[i].gurita + resp[i].hiu + resp[i].paus
              } fish(s)\n➸ XP's est : ${j}XP(s)\n\n`;
            }
            await tobz.reply(from, leaderboard, id);
          }
          break;
        case prefix + 'tophunter':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            const resp = hunt;
            const arraylb = [];
            resp.sort((a, b) => (a.babi + a.rusa + a.banteng + a.zebra + a.jerapah + a.harimau + a.elang + a.orangutan < b.babi + b.rusa + b.banteng + b.zebra + b.jerapah + b.harimau + b.elang + b.orangutan ? 1 : -1));
            let leaderboard = '-----[ *TOP HUNTER* ]----\n\n';
            let nom = 0;
            for (let i = 0; i < 10; i++) {
              const a = resp[i].babi * 500;
              const b = resp[i].rusa * 1000;
              const c = resp[i].banteng * 100;
              const d = resp[i].zebra * 5000;
              const e = resp[i].jerapah * 2000;
              const f = resp[i].harimau * 1500;
              const g = resp[i].elang * 3000;
              const h = resp[i].orangutan * 50000;
              const j = a + b + c + d + e + f + g + h;
              nom++;
              arraylb.push(await tobz.getContact(huntt.getAllHunter(hunt)[i]));
              leaderboard += `${nom}. wa.me/${resp[i].id.replace('@c.us', '')}\n➸ 🐖: *${resp[i].babi}*, 🦌: *${resp[i].rusa}*, 🐃: *${resp[i].banteng}*\n➸ 🦓: *${resp[i].zebra}*, 🦒: *${resp[i].jerapah}*, 🐅: *${
                resp[i].harimau
              }*\n➸ 🦅: *${resp[i].elang}*, 🦧: *${resp[i].orangutan}*\n➸ Total : ${
                resp[i].babi + resp[i].rusa + resp[i].banteng + resp[i].zebra + resp[i].jerapah + resp[i].harimau + resp[i].elang + resp[i].orangutan
              } animal(s)\n➸ XP's est : ${j}XP(s)\n\n`;
            }
            await tobz.reply(from, leaderboard, id);
          }
          break;
        case `${prefix}leaderboard`:
        case prefix + 'lb':
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          const resp = level;
          const arraylb = [];
          resp.sort((a, b) => (a.xp < b.xp ? 1 : -1));
          let leaderboard = '-----[ *LEADERBOARD* ]----\n\n';
          let nom = 0;
          try {
            for (let i = 0; i < 20; i++) {
              if (resp[i].level <= 1) {
                var role = 'Bronze IV';
              } else if (resp[i].level <= 2) {
                var role = 'Bronze III';
              } else if (resp[i].level <= 3) {
                var role = 'Bronze II';
              } else if (resp[i].level <= 4) {
                var role = 'Bronze I';
              } else if (resp[i].level <= 5) {
                var role = 'Silver V';
              } else if (resp[i].level <= 6) {
                var role = 'Silver IV';
              } else if (resp[i].level <= 7) {
                var role = 'Silver III';
              } else if (resp[i].level <= 8) {
                var role = 'Silver II';
              } else if (resp[i].level <= 9) {
                var role = 'Silver I';
              } else if (resp[i].level <= 10) {
                var role = 'Gold V';
              } else if (resp[i].level <= 11) {
                var role = 'Gold IV';
              } else if (resp[i].level <= 12) {
                var role = 'Gold III';
              } else if (resp[i].level <= 13) {
                var role = 'Gold II';
              } else if (resp[i].level <= 14) {
                var role = 'Gold I';
              } else if (resp[i].level <= 15) {
                var role = 'Platinum V';
              } else if (resp[i].level <= 16) {
                var role = 'Platinum IV';
              } else if (resp[i].level <= 17) {
                var role = 'Platinum III';
              } else if (resp[i].level <= 18) {
                var role = 'Platinum II';
              } else if (resp[i].level <= 19) {
                var role = 'Platinum I';
              } else if (resp[i].level <= 20) {
                var role = 'Diamond V';
              } else if (resp[i].level <= 21) {
                var role = 'Diamond IV';
              } else if (resp[i].level <= 22) {
                var role = 'Diamond III';
              } else if (resp[i].level <= 23) {
                var role = 'Diamond II';
              } else if (resp[i].level <= 24) {
                var role = 'Diamond I';
              } else if (resp[i].level <= 25) {
                var role = 'Conqueror';
              } else if (resp[i].level <= 26) {
                var role = 'Exterminator';
              } else if (resp[i].level <= 27) {
                var role = 'Legend';
              } else if (resp[i].level <= 28) {
                var role = 'Myth';
              } else if (resp[i].level > 28) {
                var role = 'God';
              }
              nom++;
              arraylb.push(await tobz.getContact(levell.getAllUser(level)[i]));
              leaderboard += `${nom}. wa.me/${resp[i].id.replace('@c.us', '')}\n➸ XP: *${resp[i].xp}* Level: *${resp[i].level}*\n➸ Role: *${role}*\n\n`;
            }
            await tobz.reply(from, leaderboard, id);
          } catch (err) {
            console.error(err);
            await tobz.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id);
          }

          break;
        case prefix + 'xp':
          const userXpq1 = levell.getLevelingXp(sender.id, level);
          if (userXpq1 === undefined) return tobz.reply(from, `Jumlah XP kamu 0! Ayo mainkan game dan dapatkan XP di ${prefix}getxp`, id);
          tobz.reply(from, `jumlah XP kamu : ${userXpq1}`, id);
          break;
        case `${prefix}help`:
        case `${prefix}menu`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          const userXpq = levell.getLevelingXp(sender.id, level);
          if (userXpq === undefined)
            return await tobz.reply(
              from,
              `
╭────「 *LUCYA GAME* 」────
├─ *Prefix* : *「 ${prefix} 」*
├─ *XP* : 1
├─────────────────────
│+ *${prefix}shop*
│+ *${prefix}mining*       
│+ *${prefix}fish*
│+ *${prefix}bait*
│+ *${prefix}xp*
│+ *${prefix}hunt*
│+ *${prefix}carding*
│+ *${prefix}dungeon*
│+ *${prefix}dig*
│+ *${prefix}inventory*
│+ *${prefix}sellfish*
│+ *${prefix}sellhunt*
│+ *${prefix}sell* <name of animal> <amount>
│+ *${prefix}slot*
│+ *${prefix}spinslot* <number>
│+ *${prefix}shot* <number>
│+ *${prefix}giftxpto* @tag <amount>
│+ *${prefix}level*
│+ *${prefix}topfisher*
│+ *${prefix}leaderboard*
│+ *${prefix}setbg* <reply image>
│+ *${prefix}tnc*
│+ *${prefix}donate*
├─────────────────────
│   *Extra's Feature*
├─────────────────────
│+ *${prefix}cls*
│+ *${prefix}antivirtex*
│+ *${prefix}autosticker*
│+ *${prefix}nolinkgc*
│+ *${prefix}nobadword*
│+ *${prefix}mentionall*
│+ *${prefix}sticker*
╰───── *AKSARA* ────── 

*Speed :* ${processTime(t, moment())} _second_

Ketik ${prefix}rules dulu yaa:(
Ketik juga ${prefix}changelog jika ingin mengetahui update terbaru dari bot
Mau join grup? ketik ${prefix}lucyagroup

Follow socmed juga https://instagram.com/bdrsmsdn untuk mendapatkan reedem code <3`,
              id
            );
          tobz.reply(
            from,
            `
╭────「 *LUCYA GAME* 」────
├─ *Prefix* : *「 ${prefix} 」*
├─ *XP* : ${userXpq}
├─────────────────────
│+ *${prefix}shop*
│+ *${prefix}mining*       
│+ *${prefix}fish*
│+ *${prefix}bait*
│+ *${prefix}xp*
│+ *${prefix}hunt*
│+ *${prefix}carding*
│+ *${prefix}dungeon*
│+ *${prefix}dig*
│+ *${prefix}inventory*
│+ *${prefix}sellfish*
│+ *${prefix}sellhunt*
│+ *${prefix}sell* <name of animal> <amount>
│+ *${prefix}slot*
│+ *${prefix}spinslot* <number>
│+ *${prefix}shot* <number>
│+ *${prefix}giftxpto* @tag <amount>
│+ *${prefix}topfisher*
│+ *${prefix}level*
│+ *${prefix}leaderboard*
│+ *${prefix}setbg* <reply image>
│+ *${prefix}tnc*
│+ *${prefix}donate*
├─────────────────────
│   *Extra's Feature*
├─────────────────────
│+ *${prefix}cls*
│+ *${prefix}antivirtex*
│+ *${prefix}autosticker*
│+ *${prefix}nolinkgc*
│+ *${prefix}nobadword*
│+ *${prefix}mentionall*
│+ *${prefix}sticker*
╰───── *AKSARA* ────── 

*Speed :* ${processTime(t, moment())} _second_

Ketik ${prefix}rules dulu yaa:(
Ketik juga ${prefix}changelog jika ingin mengetahui update terbaru dari bot
Mau join grup? ketik ${prefix}lucyagroup

Follow socmed juga https://instagram.com/bdrsmsdn untuk mendapatkan reedem code <3`,
            id
          );

          break;
        case `${prefix}rules`:
          tobz.sendText(
            from,
            `*RULES*

1. Sebelum menggunakan, harap membaca dulu Syarat dan Ketentuan bot di ${prefix}snk
2. Limit tidak pernah direset, dengan kata lain kalian sendiri harus berusaha mendapatkan XP dan gunakan XP tersebut untuk membeli limit di ${prefix}shop
3. Join Official Group Bot di ${prefix}lucyagroup kalian bisa bertanya dan mengetahui jika terdapat kendala atau fitur baru di bot.
4. Ingin menjadi member premium? Hubungi Owner yaa ketik ${prefix}buypremium
5. Jangan lupa berdonasi atau follow socmed https://instagram.com/bdrsmsdn yaa!`
          );

          break;
        case `${prefix}delete`:
        case `${prefix}del`:
          if (!isGroupMsg) return tobz.reply(from, 'Fitur ini hanya bisa digunakan dalam group', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Fitur ini hanya bisa digunakan oleh admin group', id);
          if (!quotedMsg) return tobz.reply(from, 'Salah!!, kirim perintah *!delete <tagpesanbot>*', id);
          if (!quotedMsgObj.fromMe) return tobz.reply(from, 'Salah!, Bot tidak bisa mengahpus chat user lain!', id);
          tobz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false);

          break;
        case `${prefix}mining`:
          //tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
          const currentLevelq = levell.getLevelingLevel(sender.id, level);
          const checkIdq = levell.getLevelingId(sender.id, level);
          const lmtmining = limitt.getLimite(sender.id, limite);
          if (lmtmining !== undefined && cd - (Date.now() - lmtmining) > 0) {
            const time = ms(cd - (Date.now() - lmtmining));
            await tobz.reply(from, `Kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`, id);
          } else if (isOwner) {
            if (currentLevelq === undefined && checkIdq === undefined) {
              levell.addLevelingId(sender.id, level);
            } else {
              const amountXpq = Math.floor(Math.random() * 1000) + 5000;
              const getXpq = levell.getLevelingXp(sender.id, level);
              levell.addLevelingXp(sender.id, amountXpq, level);
              await tobz.reply(from, `Selamat ${pushname} kamu mendapatkan ${amountXpq} xp`, id);
            }
          } else {
            if (currentLevelq === undefined && checkIdq === undefined) {
              levell.addLevelingId(sender.id, level);
            } else {
              const amountXpq = Math.floor(Math.random() * 1000) + 5000;
              const getXpq = levell.getLevelingXp(sender.id, level);
              levell.addLevelingXp(sender.id, amountXpq, level);
              await tobz.reply(from, `Selamat ${pushname} kamu mendapatkan ${amountXpq} xp`, id);
            }
            limitt.addLimite(sender.id, limite);
          }

          break;
        case prefix + 'shot':
        case prefix + 'shoot':
          {
            ////tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

            await limitAdd(serial);
            if (args.length === 1) return tobz.reply(from, 'Masukkan angka!', id);
            if (isNaN(args[1])) return tobz.reply(from, 'Hanya berupa angka!');
            if (args[1].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
            if (args[1].includes('.')) return tobz.reply(from, 'Tidak boleh menggunakan bilangan desimal!', id);
            if (args[1] > 3) return tobz.reply(from, 'Hanya menebak angka 1 - 3', id);
            const currentLevelq = levell.getLevelingLevel(sender.id, level);
            const checkIdq = levell.getLevelingId(sender.id, level);
            const lmtmining = limitt.getShotLimit(sender.id, shotlimit);
            if (lmtmining !== undefined && cdshot - (Date.now() - lmtmining) > 0) {
              const time = ms(cdshot - (Date.now() - lmtmining));
              await tobz.reply(from, `Jangan terlalu cepat! Beristirahatlah sejenak.\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
            } else if (isOwner) {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                const shut = Math.floor(Math.random() * 3);
                console.log(shut);
                if (args[1] == 1 && args[1] - 1 === shut) {
                  //IJO 1
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   🟢       ⚫        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`,
                    id
                  );
                  levell.addLevelingXp(sender.id, 100000, level);
                  await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 100000XP!`, id);
                } else if (args[1] == 1 && args[1] - 1 !== shut) {
                  //MERAH 1
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   🔴       ⚫        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`
                  );
                  levell.removeLevelingXp(sender.id, 75000, level);
                  await tobz.reply(from, `Kamu kalah! XP kamu dikurang 75000!`, id);
                } else if (args[1] == 2 && args[1] - 1 === shut) {
                  //IJO 2
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       🟢        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`,
                    id
                  );
                  levell.addLevelingXp(sender.id, 100000, level);
                  await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 100000XP!`, id);
                } else if (args[1] == 2 && args[1] - 1 !== shut) {
                  //MERAH 2
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       🔴        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`
                  );
                  levell.removeLevelingXp(sender.id, 75000, level);
                  await tobz.reply(from, `Kamu kalah! XP kamu dikurang 75000!`, id);
                } else if (args[1] == 3 && args[1] - 1 === shut) {
                  //IJO 3
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       ⚫        🟢

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`,
                    id
                  );
                  levell.addLevelingXp(sender.id, 100000, level);
                  await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 100000XP!`, id);
                } else if (args[1] == 3 && args[1] - 1 !== shut) {
                  //MERAH 3
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       ⚫        🔴

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`
                  );
                  levell.removeLevelingXp(sender.id, 75000, level);
                  await tobz.reply(from, `Kamu kalah! XP kamu dikurang 75000!`, id);
                }
              }
            } else {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                const shut = Math.floor(Math.random() * 3);
                console.log(shut);
                if (args[1] == 1 && args[1] - 1 === shut) {
                  //IJO 1
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   🟢       ⚫        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`,
                    id
                  );
                  levell.addLevelingXp(sender.id, 100000, level);
                  await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 100000XP!`, id);
                } else if (args[1] == 1 && args[1] - 1 !== shut) {
                  //MERAH 1
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   🔴       ⚫        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`
                  );
                  levell.removeLevelingXp(sender.id, 75000, level);
                  await tobz.reply(from, `Kamu kalah! XP kamu dikurang 75000!`, id);
                } else if (args[1] == 2 && args[1] - 1 === shut) {
                  //IJO 2
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       🟢        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`,
                    id
                  );
                  levell.addLevelingXp(sender.id, 100000, level);
                  await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 100000XP!`, id);
                } else if (args[1] == 2 && args[1] - 1 !== shut) {
                  //MERAH 2
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       🔴        ⚫

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`
                  );
                  levell.removeLevelingXp(sender.id, 75000, level);
                  await tobz.reply(from, `Kamu kalah! XP kamu dikurang 75000!`, id);
                } else if (args[1] == 3 && args[1] - 1 === shut) {
                  //IJO 3
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       ⚫        🟢

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`,
                    id
                  );
                  levell.addLevelingXp(sender.id, 100000, level);
                  await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 100000XP!`, id);
                } else if (args[1] == 3 && args[1] - 1 !== shut) {
                  //MERAH 3
                  tobz.sendText(
                    from,
                    `
「 🎯 | *SHOT* | 🎯 」
─────────────

   ⚫       ⚫        🔴

─────────────
「 🎯 | *SHOT* | 🎯 」\n\nKeterangan : Jika objek berwarna hijau berarti anda menang\n\nContoh : ⚫  🟢  ⚫`
                  );
                  levell.removeLevelingXp(sender.id, 75000, level);
                  await tobz.reply(from, `Kamu kalah! XP kamu dikurang 75000!`, id);
                }
              }
              limitt.addShotLimit(sender.id, shotlimit);
            }
          }
          break;
        case `${prefix}fish`:
          //tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
          {
            const ikan = [`🐡🐠🐟🐙🦑🦐🦞🦈🐋`];
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            if (isUmpan(serial)) return tobz.reply(from, `Hai ${pushname}, umpan untuk kamu memancing sudah habis:( Kamu dapat membelinya di ${prefix}shop`, id);
            const checkIdq = fishh.getFishId(sender.id, fish);
            const lmtmining = limitt.getFLimit(sender.id, flimit);
            try {
              if (isSeaFisher && !isOceanFisher) {
                if (lmtmining !== undefined && cdf - (Date.now() - lmtmining) > 0) {
                  const time = ms(cdf - (Date.now() - lmtmining));
                  await tobz.reply(from, `Tunggu sebentar! Cuaca sedang tidak bagus untuk pergi memancing.\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
                } else if (isOwner) {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 7);
                    const fish2 = Math.floor(Math.random() * 15);
                    const fish3 = Math.floor(Math.random() * 10);
                    const fish4 = Math.floor(Math.random() * 10);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, 0, fish2, 0, 0, fish3, fish4, fish1, 0, 0, fish);
                    await tobz.reply(from, `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🦞\n${fish2}🐠\n${fish3}🦑\n${fish4}🦐\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`, id);
                  }
                } else {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    await umpanAdd(serial);
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 7);
                    const fish2 = Math.floor(Math.random() * 15);
                    const fish3 = Math.floor(Math.random() * 10);
                    const fish4 = Math.floor(Math.random() * 10);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, 0, fish2, 0, 0, fish3, fish4, fish1, 0, 0, fish);
                    await tobz.reply(from, `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🦞\n${fish2}🐠\n${fish3}🦑\n${fish4}🦐\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`, id);
                  }
                  limitt.addFLimit(serial, flimit);
                }
              } else if (isSeaFisher && isOceanFisher) {
                if (lmtmining !== undefined && cdf - (Date.now() - lmtmining) > 0) {
                  const time = ms(cdf - (Date.now() - lmtmining));
                  await tobz.reply(from, `Tunggu sebentar! Cuaca sedang tidak bagus untuk pergi memancing.\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
                } else if (isOwner) {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 20);
                    const fish2 = Math.floor(Math.random() * 10);
                    const fish3 = Math.floor(Math.random() * 15);
                    const fish4 = Math.floor(Math.random() * 8);
                    const fish5 = Math.floor(Math.random() * 3);
                    const fish6 = Math.floor(Math.random() * 2);
                    const fish7 = Math.floor(Math.random() * 10);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, fish1, fish2, 0, fish4, fish3, 0, fish7, fish5, fish6, fish);
                    await tobz.reply(
                      from,
                      `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🐡\n${fish2}🐠\n${fish3}🦑\n${fish4}🐙\n${fish7}🦞\n${fish5}🦈\n${fish6}🐋\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`,
                      id
                    );
                  }
                } else {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    await umpanAdd(serial);
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 20);
                    const fish2 = Math.floor(Math.random() * 10);
                    const fish3 = Math.floor(Math.random() * 15);
                    const fish4 = Math.floor(Math.random() * 8);
                    const fish5 = Math.floor(Math.random() * 3);
                    const fish6 = Math.floor(Math.random() * 2);
                    const fish7 = Math.floor(Math.random() * 10);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, fish1, fish2, 0, fish4, fish3, 0, fish7, fish5, fish6, fish);
                    await tobz.reply(
                      from,
                      `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🐡\n${fish2}🐠\n${fish3}🦑\n${fish4}🐙\n${fish7}🦞\n${fish5}🦈\n${fish6}🐋\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`,
                      id
                    );
                  }
                  limitt.addFLimit(serial, flimit);
                }
              } else if (!isSeaFisher && isOceanFisher) {
                if (lmtmining !== undefined && cdf - (Date.now() - lmtmining) > 0) {
                  const time = ms(cdf - (Date.now() - lmtmining));
                  await tobz.reply(from, `Tunggu sebentar! Cuaca sedang tidak bagus untuk pergi memancing.\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
                } else if (isOwner) {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 20);
                    const fish2 = Math.floor(Math.random() * 10);
                    const fish3 = Math.floor(Math.random() * 15);
                    const fish4 = Math.floor(Math.random() * 8);
                    const fish5 = Math.floor(Math.random() * 3);
                    const fish6 = Math.floor(Math.random() * 2);
                    const fish7 = Math.floor(Math.random() * 10);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, fish1, fish2, 0, fish4, fish3, 0, fish7, fish5, fish6, fish);
                    await tobz.reply(
                      from,
                      `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🐡\n${fish2}🐠\n${fish3}🦑\n${fish4}🐙\n${fish7}🦞\n${fish5}🦈\n${fish6}🐋\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`,
                      id
                    );
                  }
                } else {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    await umpanAdd(serial);
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 20);
                    const fish2 = Math.floor(Math.random() * 10);
                    const fish3 = Math.floor(Math.random() * 15);
                    const fish4 = Math.floor(Math.random() * 8);
                    const fish5 = Math.floor(Math.random() * 3);
                    const fish6 = Math.floor(Math.random() * 2);
                    const fish7 = Math.floor(Math.random() * 10);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, fish1, fish2, 0, fish4, fish3, 0, fish7, fish5, fish6, fish);
                    await tobz.reply(
                      from,
                      `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🐡\n${fish2}🐠\n${fish3}🦑\n${fish4}🐙\n${fish7}🦞\n${fish5}🦈\n${fish6}🐋\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`,
                      id
                    );
                  }
                  limitt.addFLimit(serial, flimit);
                }
              } else {
                if (lmtmining !== undefined && cdf - (Date.now() - lmtmining) > 0) {
                  const time = ms(cdf - (Date.now() - lmtmining));
                  await tobz.reply(from, `Tunggu sebentar! Cuaca sedang tidak bagus untuk pergi memancing.\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
                } else if (isOwner) {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 7);
                    const fish2 = Math.floor(Math.random() * 5);
                    const fish3 = Math.floor(Math.random() * 15);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, fish1, fish2, fish3, 0, 0, 0, 0, 0, 0, fish);
                    await tobz.reply(from, `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🐡\n${fish2}🐠\n${fish3}🐟\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu tangkap!`, id);
                  }
                } else {
                  if (checkIdq === undefined) {
                    fishh.addFishId(sender.id, fish);
                  } else {
                    await umpanAdd(serial);
                    const amountXp = Math.floor(Math.random() * 100);
                    const fish1 = Math.floor(Math.random() * 7);
                    const fish2 = Math.floor(Math.random() * 5);
                    const fish3 = Math.floor(Math.random() * 15);
                    const getXp = levell.getLevelingXp(sender.id, level);
                    levell.addLevelingXp(sender.id, amountXp, level);
                    fishh.addFishFish(sender.id, fish1, fish2, fish3, 0, 0, 0, 0, 0, 0, fish);
                    await tobz.reply(from, `Tangkapan yang bagus! Kamu mendapatkan:\n${fish1}🐡\n${fish2}🐠\n${fish3}🐟\ndan ${amountXp}XP\n\nCek ${prefix}fishinv untuk melihat ikan yang telah kamu pancing!`, id);
                  }
                  limitt.addFLimit(serial, flimit);
                }
              }
            } catch (err) {
              console.error(err);
            }
          }

          break;
        case prefix + 'inventory':
        case prefix + 'inven':
        case prefix + 'inv':
          //if (!isOwner) return tobz.reply(from, 'Dalam perbaikan! Gunakan xfishinv untuk melihat hasil tangkapan ikan', id)
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (!isFisher) return tobz.reply(from, `Hai! Kamu belum pernah memancing satupun ikan, ayo tangkap ikan pertamamu di ${prefix}fish`, id);
          if (!isHunter) return tobz.reply(from, `Hai! Kamu belum pernah berburu satupun hewan, ayo tangkap hewan pertamamu di ${prefix}hunt`, id);
          const userqx = levell.getLevelingXp(sender.id, level);
          const fisher = fishh.getFishId(sender.id, fish);
          const inve = fishh.getFish1(fisher, fish);
          const inve2 = fishh.getFish2(fisher, fish);
          const inve3 = fishh.getFish3(fisher, fish);
          const gur = fishh.getGurita(fisher, fish);
          const cum = fishh.getCumi(fisher, fish);
          const udg = fishh.getUdang(fisher, fish);
          const lobs = fishh.getLobster(fisher, fish);
          const hiu = fishh.getHiu(fisher, fish);
          const paus = fishh.getPaus(fisher, fish);
          const totsel = inve * 500;
          const totsel2 = inve2 * 1000;
          const totsel3 = inve3 * 100;
          const totgur = gur * 5000;
          const totcum = cum * 2000;
          const totudg = udg * 1500;
          const totlobs = lobs * 3000;
          const tothiu = hiu * 50000;
          const totpaus = paus * 100000;
          const hunter = huntt.getHuntId(sender.id, hunt);
          const bab = huntt.getBabi(hunter, hunt);
          const rus = huntt.getRusa(hunter, hunt);
          const ban = huntt.getBanteng(hunter, hunt);
          const zeb = huntt.getZebra(hunter, hunt);
          const jer = huntt.getJerapah(hunter, hunt);
          const har = huntt.getHarimau(hunter, hunt);
          const el = huntt.getElang(hunter, hunt);
          const ortu = huntt.getOrangutan(hunter, hunt);
          const totbab = bab * 5000;
          const totrus = rus * 10000;
          const totban = ban * 50000;
          const totzeb = zeb * 30000;
          const totjer = jer * 100000;
          const tothar = har * 200000;
          const totel = el * 30000;
          const totor = ortu * 1000000;
          tobz.reply(
            from,
            `*Your XP's*: *${userqx}*

*Fish Inventory*:
${inve}🐡 Pufferfish, ${inve2}🐠 Tropicalfish,
${inve3}🐟 Rawfish, ${cum}🦑 Squid, 
${udg}🦐 Shrimp, ${lobs}🦞 Lobster,
${gur}🐙 Octopus, ${hiu}🦈 Shark, 
${paus}🐋 Whale
Fish Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + tothiu + totpaus}XP

*Hunt Inventory*:
${bab}🐖 Pig, ${rus}🦌 Deer,
${ban}🐃 Bull, ${zeb}🦓 Zebra, 
${jer}🦒 Giraffe, ${har}🐅 Tiger
${el}🦅 Eagle, ${ortu}🦧 Orangutan
Hunt Value: ${totbab + totrus + totban + totzeb + totjer + tothar + totel + totor}

_Kamu bisa menjual semuanya di ${prefix}sellfish/sellhunt atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
            id
          );

          break;
        case prefix + 'fishinv':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (!isFisher) return tobz.reply(from, `Hai! Kamu belum pernah memancing satupun ikan, ayo tangkap ikan pertamamu di ${prefix}fish`, id);
            const userqx = levell.getLevelingXp(sender.id, level);
            const fisher = fishh.getFishId(sender.id, fish);
            const inve = fishh.getFish1(fisher, fish);
            const inve2 = fishh.getFish2(fisher, fish);
            const inve3 = fishh.getFish3(fisher, fish);
            const gur = fishh.getGurita(fisher, fish);
            const cum = fishh.getCumi(fisher, fish);
            const udg = fishh.getUdang(fisher, fish);
            const lobs = fishh.getLobster(fisher, fish);
            const hiu = fishh.getHiu(fisher, fish);
            const paus = fishh.getPaus(fisher, fish);
            const totsel = inve * 500;
            const totsel2 = inve2 * 1000;
            const totsel3 = inve3 * 100;
            const totgur = gur * 5000;
            const totcum = cum * 2000;
            const totudg = udg * 1500;
            const totlobs = lobs * 3000;
            const tothiu = hiu * 50000;
            const totpaus = paus * 100000;
            if (isSeaFisher && !isOceanFisher) {
              tobz.reply(
                from,
                `Your XP's: ${userqx}\nCurrently using *Plastic Rod* for Fish\nCurrent Fish biome: 🏝️ *Sea*

*Fish Inventory*:
${inve}🐡 Pufferfish, ${inve2}🐠 Tropicalfish,
${inve3}🐟 Rawfish, ${cum}🦑 Squid, 
${udg}🦐 Shrimp, ${lobs}🦞 Lobster,
${gur}🐙 Octopus, ${hiu}🦈 Shark, 
${paus}🐋 Whale
Fish Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + tothiu + totpaus}XP

_Kamu bisa menjual semuanya di ${prefix}sellfish atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
                id
              );
            } else if (isSeaFisher && isOceanFisher) {
              tobz.reply(
                from,
                `Your XP's: ${userqx}\nCurrently using *Plastic Rod* for Fish\nCurrent Fish biome: 🏝️ *Sea*

*Fish Inventory*: 
${inve}🐡 Pufferfish, ${inve2}🐠 Tropicalfish,
${inve3}🐟 Rawfish, ${cum}🦑 Squid, 
${udg}🦐 Shrimp, ${lobs}🦞 Lobster,
${gur}🐙 Octopus, ${hiu}🦈 Shark, 
${paus}🐋 Whale
Fish Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + tothiu + totpaus}XP

_Kamu bisa menjual semuanya di ${prefix}sellfish atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
                id
              );
            } else if (!isSeaFisher && isOceanFisher) {
              tobz.reply(
                from,
                `Your XP's: ${userqx}\nCurrently using *Plastic Rod* for Fish\nCurrent Fish biome: 🏝️ *Sea*

*Fish Inventory*:
${inve}🐡 Pufferfish, ${inve2}🐠 Tropicalfish,
${inve3}🐟 Rawfish, ${cum}🦑 Squid, 
${udg}🦐 Shrimp, ${lobs}🦞 Lobster,
${gur}🐙 Octopus, ${hiu}🦈 Shark, 
${paus}🐋 Whale
Fish Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + tothiu + totpaus}XP

_Kamu bisa menjual semuanya di ${prefix}sellfish atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
                id
              );
            } else {
              tobz.reply(
                from,
                `Your XP's: ${userqx}\nCurrently using *Plastic Rod* for Fish\nCurrent Fish biome: 🏝️ *Sea*

*Fish Inventory*:
${inve}🐡 Pufferfish, ${inve2}🐠 Tropicalfish,
${inve3}🐟 Rawfish, ${cum}🦑 Squid, 
${udg}🦐 Shrimp, ${lobs}🦞 Lobster,
${gur}🐙 Octopus, ${hiu}🦈 Shark, 
${paus}🐋 Whale
Fish Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + tothiu + totpaus}XP

_Kamu bisa menjual semuanya di ${prefix}sellfish atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
                id
              );
            }
          }
          break;
        case prefix + 'huntinv':
          {
            //if (!isOwner) return tobz.reply(from, 'Dalam perbaikan!', id)
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (!isHunter) return tobz.reply(from, `Hai! Kamu belum pernah berburu satupun hewan, ayo tangkap hewan pertamamu di ${prefix}hunt`, id);
            const userqx = levell.getLevelingXp(sender.id, level);
            const fisher = huntt.getHuntId(sender.id, hunt);
            const inve = huntt.getBabi(fisher, hunt);
            const inve2 = huntt.getRusa(fisher, hunt);
            const inve3 = huntt.getBanteng(fisher, hunt);
            const gur = huntt.getZebra(fisher, hunt);
            const cum = huntt.getJerapah(fisher, hunt);
            const udg = huntt.getHarimau(fisher, hunt);
            const lobs = huntt.getElang(fisher, hunt);
            const ortu = huntt.getOrangutan(fisher, hunt);
            const totsel = inve * 5000;
            const totsel2 = inve2 * 10000;
            const totsel3 = inve3 * 50000;
            const totgur = gur * 30000;
            const totcum = cum * 100000;
            const totudg = udg * 200000;
            const totlobs = lobs * 30000;
            const ortu1 = ortu * 1000000;
            if (!isForestHunter) {
              tobz.reply(
                from,
                `Your XP's: ${userqx}\nCurrently using *Hunting Sniper* for Hunt\nCurrent Hunt biome: 🏜️ *Savana*

*Hunt Inventory*:
${inve}🐗 Pig, ${inve2}🦌 Deer,
${inve3}🐃 Bull, ${gur}🦓 Zebra, 
${cum}🦒 Giraffe, ${udg}🐅 Tiger,
${lobs}🦅 Eagle, ${ortu}🦧 Orangutan
Hunt Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + ortu1}XP

_Kamu bisa menjual semuanya di ${prefix}sellhunt atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
                id
              );
            } else {
              tobz.reply(
                from,
                `Your XP's: ${userqx}\nCurrently using *Hunting Sniper* for Hunt\nCurrent Hunt biome: 🌲 *Forest*

*Hunt Inventory*:
${inve}🐗 Pig, ${inve2}🦌 Deer,
${inve3}🐃 Bull, ${gur}🦓 Zebra, 
${cum}🦒 Giraffe, ${udg}🐅 Tiger,
${lobs}🦅 Eagle,  ${ortu}🦧 Orangutan
Hunt Value: ${totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + ortu1}XP

_Kamu bisa menjual semuanya di ${prefix}sellhunt atau jual terpisah di ${prefix}sell <nama hewan> <jumlah>_`,
                id
              );
            }
          }
          break;
        case prefix + 'sellhunt':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (!isHunter) return tobz.reply(from, `Hai! Kamu belum pernah berburu satupun hewan, ayo tangkap hewan pertamamu di ${prefix}hunt`, id);
            const userqx = levell.getLevelingXp(sender.id, level);
            const fisher = huntt.getHuntId(sender.id, hunt);
            const inve = huntt.getBabi(fisher, hunt);
            const inve2 = huntt.getRusa(fisher, hunt);
            const inve3 = huntt.getBanteng(fisher, hunt);
            const gur = huntt.getZebra(fisher, hunt);
            const cum = huntt.getJerapah(fisher, hunt);
            const udg = huntt.getHarimau(fisher, hunt);
            const lobs = huntt.getElang(fisher, hunt);
            const ortu = huntt.getOrangutan(fisher, hunt);
            const totsel = inve * 5000;
            const totsel2 = inve2 * 10000;
            const totsel3 = inve3 * 50000;
            const totgur = gur * 30000;
            const totcum = cum * 100000;
            const totudg = udg * 200000;
            const totlobs = lobs * 30000;
            const ortu1 = ortu * 1000000;
            const semwa = totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + ortu1;
            if (semwa === 0) return tobz.reply(from, 'Kamu tidak memiliki apapun untuk dijual', id);
            huntt.removeHuntHunt(serial, inve, inve2, inve3, gur, cum, udg, lobs, ortu, hunt);
            levell.addLevelingXp(serial, semwa, level);
            await tobz.reply(from, `Penjualan ${inve + inve2 + inve3 + gur + cum + udg + lobs + ortu} hewan berhasil!\nJumlah xp didapatkan: ${semwa}XP`, id);
          }

          break;
        case prefix + 'jualikan':
        case prefix + 'sellfish':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (!isFisher) return tobz.reply(from, `Hai! Kamu belum pernah memancing satupun ikan, ayo tangkap ikan pertamamu di ${prefix}fish`, id);
            const fisher = fishh.getFishId(sender.id, fish);
            const inve = fishh.getFish1(fisher, fish);
            const inve2 = fishh.getFish2(fisher, fish);
            const inve3 = fishh.getFish3(fisher, fish);
            const gur = fishh.getGurita(fisher, fish);
            const cum = fishh.getCumi(fisher, fish);
            const udg = fishh.getUdang(fisher, fish);
            const lobs = fishh.getLobster(fisher, fish);
            const hiu = fishh.getHiu(fisher, fish);
            const paus = fishh.getPaus(fisher, fish);
            const totsel = inve * 500;
            const totsel2 = inve2 * 1000;
            const totsel3 = inve3 * 100;
            const totgur = gur * 5000;
            const totcum = cum * 2000;
            const totudg = udg * 1500;
            const totlobs = lobs * 3000;
            const tothiu = hiu * 50000;
            const totpaus = paus * 100000;
            const semwa = totsel + totsel2 + totsel3 + totgur + totcum + totudg + totlobs + tothiu + totpaus;
            let position = false;
            if (semwa === 0) return tobz.reply(from, 'Kamu tidak memiliki apapun untuk dijual', id);
            fishh.removeFishFish(serial, inve, inve2, inve3, gur, cum, udg, lobs, hiu, paus, fish);
            levell.addLevelingXp(serial, semwa, level);
            await tobz.reply(from, `Penjualan ${inve + inve2 + inve3 + gur + cum + udg + lobs + hiu + paus} ikan berhasil!\nJumlah xp didapatkan: ${semwa}XP`, id);
          }

          break;
        case prefix + 'upgrade':
          {
            const buyerq = levell.getLevelingId(sender.id, level);
            const obj1 = levell.getLevelingXp(buyerq, level);
            if (args.length === 1) return tobz.reply(from, `Masukkan item yang ingin diupgrade! Contoh: ${prefix}upgrade biome`, id);
            if (args.length <= 3) {
              if (args[1] === 'biome' || args[1] === 'bioma') {
                if (args.length === 2) return tobz.reply(from, `Masukkan item yang ingin diupgrade! Contoh: ${prefix}upgrade biome ocean/sea`, id);
                if (args[2] === 'sea') {
                  if (buyerq !== undefined) {
                    if (isSeaFisher) return tobz.reply(from, 'Kamu sudah membeli item ini!', id);
                    if (obj1 < 15000000) return tobz.reply(from, `Maaf XP anda kurang untuk mengupgrade! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
                    levell.removeLevelingXp(sender.id, 15000000, level);
                    fishh.addSeaFisher(sender.id, sea);
                    await tobz.reply(from, `Berhasil upgrade _Biome_ ke *Sea*! Ayo pergi memancing dan dapatkan ikan!`, id);
                  }
                } else if (args[2] === 'ocean') {
                  if (buyerq !== undefined) {
                    if (isOceanFisher) return tobz.reply(from, 'Kamu sudah membeli item ini!', id);
                    if (obj1 < 100000000) return tobz.reply(from, `Maaf XP anda kurang untuk mengupgrade! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
                    levell.removeLevelingXp(sender.id, 100000000, level);
                    fishh.addOceanFisher(sender.id, ocean);
                    await tobz.reply(from, `Berhasil upgrade _Biome_ ke *Ocean*! Ayo pergi memancing dan dapatkan ikan!`, id);
                  }
                } else {
                  tobz.reply(from, 'Hanya pilih *sea* / *ocean*!', id);
                }
              } else {
                tobz.reply(from, 'Lucya tidak menyediakan upgrade untuk item tersebut!', id);
              }
            } else {
              tobz.reply(from, `Format salah! Contoh: ${prefix}upgrade biome ocean`, id);
            }
          }
          break;
        case prefix + 'sell': {
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (args.length === 1) return tobz.reply(from, `Gunakan ${prefix}sell <nama ikan> <jumlah>. Contoh: ${prefix}sell pufferfish 100\n\n_Note_ : \n_Ikan 🐡 = pufferfish_\n_Ikan 🐠 = tropicalfish_\n_Ikan 🐟 = rawfish_`, id);
          if (isNaN(args[2])) return tobz.reply(from, 'Hanya masukkan jumlah hewan berupa angka!', id);
          if (args[2].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
          if (args[2].includes('.')) return tobz.reply(from, 'Gift tidak boleh menggunakan bilangan desimal!', id);
          const fisher = fishh.getFishId(sender.id, fish);
          const inve = fishh.getFish1(fisher, fish);
          const inve2 = fishh.getFish2(fisher, fish);
          const inve3 = fishh.getFish3(fisher, fish);
          const gur = fishh.getGurita(fisher, fish);
          const cum = fishh.getCumi(fisher, fish);
          const udg = fishh.getUdang(fisher, fish);
          const lobs = fishh.getLobster(fisher, fish);
          const hiu = fishh.getHiu(fisher, fish);
          const paus = fishh.getPaus(fisher, fish);
          const hunter = huntt.getHuntId(sender.id, hunt);
          const bab = huntt.getBabi(hunter, hunt);
          const rus = huntt.getRusa(hunter, hunt);
          const ban = huntt.getBanteng(hunter, hunt);
          const zeb = huntt.getZebra(hunter, hunt);
          const jer = huntt.getJerapah(hunter, hunt);
          const har = huntt.getHarimau(hunter, hunt);
          const el = huntt.getElang(hunter, hunt);
          const ortu = huntt.getOrangutan(hunter, hunt);
          if (args.length <= 3) {
            if (args[1] === 'pufferfish') {
              if (inve === 0) return tobz.reply(from, 'Kamu tidak memiliki pufferfish di inventory!', id);
              if (inve < args[2]) return tobz.reply(from, 'Kamu tidak punya pufferfish sebanyak itu!', id);
              fishh.removeFishFish(serial, args[2], 0, 0, 0, 0, 0, 0, 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 500, level);
              await tobz.reply(from, `Penjualan Pufferfish berhasil!\nJumlah xp didapatkan: ${args[2] * 500}XP`, id);
            } else if (args[1] === 'tropicalfish') {
              if (inve2 === 0) return tobz.reply(from, 'Kamu tidak memiliki tropicalfish di inventory!', id);
              if (inve2 < args[2]) return tobz.reply(from, 'Kamu tidak punya tropicalfish sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, args[2], 0, 0, 0, 0, 0, 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 1000, level);
              await tobz.reply(from, `Penjualan Tropicalfish berhasil!\nJumlah xp didapatkan: ${args[2] * 1000}XP`, id);
            } else if (args[1] === 'rawfish') {
              if (inve3 === 0) return tobz.reply(from, 'Kamu tidak memiliki rawfish di inventory!', id);
              if (inve3 < args[2]) return tobz.reply(from, 'Kamu tidak punya rawfish sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, args[2], 0, 0, 0, 0, 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 100, level);
              await tobz.reply(from, `Penjualan Rawfish berhasil!\nJumlah xp didapatkan: ${args[2] * 100}XP`, id);
            } else if (args[1] === 'octopus') {
              if (gur === 0) return tobz.reply(from, 'Kamu tidak memiliki octopus di inventory!', id);
              if (gur < args[2]) return tobz.reply(from, 'Kamu tidak punya octopus sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, 0, args[2], 0, 0, 0, 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 5000, level);
              await tobz.reply(from, `Penjualan Octopus berhasil!\nJumlah xp didapatkan: ${args[2] * 5000}XP`, id);
            } else if (args[1] === 'squid') {
              if (cum === 0) return tobz.reply(from, 'Kamu tidak memiliki squid di inventory!', id);
              if (cum < args[2]) return tobz.reply(from, 'Kamu tidak punya squid sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, 0, 0, args[2], 0, 0, 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 2000, level);
              await tobz.reply(from, `Penjualan Squid berhasil!\nJumlah xp didapatkan: ${args[2] * 2000}XP`, id);
            } else if (args[1] === 'shrimp') {
              if (udg === 0) return tobz.reply(from, 'Kamu tidak memiliki shrimp di inventory!', id);
              if (udg < args[2]) return tobz.reply(from, 'Kamu tidak punya shrimp sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, 0, 0, 0, args[2], 0, 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 1500, level);
              await tobz.reply(from, `Penjualan Shrimp berhasil!\nJumlah xp didapatkan: ${args[2] * 1500}XP`, id);
            } else if (args[1] === 'lobster') {
              if (lobs === 0) return tobz.reply(from, 'Kamu tidak memiliki lobster di inventory!', id);
              if (lobs < args[2]) return tobz.reply(from, 'Kamu tidak punya lobster sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, 0, 0, 0, 0, args[2], 0, 0, fish);
              levell.addLevelingXp(serial, args[2] * 3000, level);
              await tobz.reply(from, `Penjualan Lobster berhasil!\nJumlah xp didapatkan: ${args[2] * 3000}XP`, id);
            } else if (args[1] === 'shark') {
              if (hiu === 0) return tobz.reply(from, 'Kamu tidak memiliki shark di inventory!', id);
              if (hiu < args[2]) return tobz.reply(from, 'Kamu tidak punya shark sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, 0, 0, 0, 0, 0, args[2], 0, fish);
              levell.addLevelingXp(serial, args[2] * 50000, level);
              await tobz.reply(from, `Penjualan Shark berhasil!\nJumlah xp didapatkan: ${args[2] * 50000}XP`, id);
            } else if (args[1] === 'whale') {
              if (paus === 0) return tobz.reply(from, 'Kamu tidak memiliki whale di inventory!', id);
              if (paus < args[2]) return tobz.reply(from, 'Kamu tidak punya whale sebanyak itu!', id);
              fishh.removeFishFish(serial, 0, 0, 0, 0, 0, 0, 0, 0, args[2], fish);
              levell.addLevelingXp(serial, args[2] * 100000, level);
              await tobz.reply(from, `Penjualan Whale berhasil!\nJumlah xp didapatkan: ${args[2] * 100000}XP`, id);
            } else if (args[1] === 'pig') {
              if (bab === 0) return tobz.reply(from, 'Kamu tidak memiliki pig di inventory!', id);
              if (bab < args[2]) return tobz.reply(from, 'Kamu tidak punya pig sebanyak itu!', id);
              huntt.removeHuntHunt(serial, args[2], 0, 0, 0, 0, 0, 0, 0, hunt);
              levell.addLevelingXp(serial, args[2] * 5000, level);
              await tobz.reply(from, `Penjualan Pig berhasil!\nJumlah xp didapatkan: ${args[2] * 5000}XP`, id);
            } else if (args[1] === 'deer') {
              if (rus === 0) return tobz.reply(from, 'Kamu tidak memiliki deer di inventory!', id);
              if (rus < args[2]) return tobz.reply(from, 'Kamu tidak punya deer sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, args[2], 0, 0, 0, 0, 0, 0, hunt);
              levell.addLevelingXp(serial, args[2] * 10000, level);
              await tobz.reply(from, `Penjualan Deer berhasil!\nJumlah xp didapatkan: ${args[2] * 10000}XP`, id);
            } else if (args[1] === 'bull') {
              if (ban === 0) return tobz.reply(from, 'Kamu tidak memiliki bull di inventory!', id);
              if (ban < args[2]) return tobz.reply(from, 'Kamu tidak punya bull sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, 0, args[2], 0, 0, 0, 0, 0, hunt);
              levell.addLevelingXp(serial, args[2] * 50000, level);
              await tobz.reply(from, `Penjualan Bull berhasil!\nJumlah xp didapatkan: ${args[2] * 50000}XP`, id);
            } else if (args[1] === 'zebra') {
              if (zeb === 0) return tobz.reply(from, 'Kamu tidak memiliki zebra di inventory!', id);
              if (zeb < args[2]) return tobz.reply(from, 'Kamu tidak punya zebra sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, 0, 0, args[2], 0, 0, 0, 0, hunt);
              levell.addLevelingXp(serial, args[2] * 30000, level);
              await tobz.reply(from, `Penjualan Zebra berhasil!\nJumlah xp didapatkan: ${args[2] * 30000}XP`, id);
            } else if (args[1] === 'giraffe') {
              if (jer === 0) return tobz.reply(from, 'Kamu tidak memiliki giraffe di inventory!', id);
              if (jer < args[2]) return tobz.reply(from, 'Kamu tidak punya giraffe sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, 0, 0, 0, args[2], 0, 0, 0, hunt);
              levell.addLevelingXp(serial, args[2] * 100000, level);
              await tobz.reply(from, `Penjualan Giraffe berhasil!\nJumlah xp didapatkan: ${args[2] * 100000}XP`, id);
            } else if (args[1] === 'tiger') {
              if (har === 0) return tobz.reply(from, 'Kamu tidak memiliki tiger di inventory!', id);
              if (har < args[2]) return tobz.reply(from, 'Kamu tidak punya tiger sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, 0, 0, 0, 0, args[2], 0, 0, hunt);
              levell.addLevelingXp(serial, args[2] * 200000, level);
              await tobz.reply(from, `Penjualan Tiger berhasil!\nJumlah xp didapatkan: ${args[2] * 200000}XP`, id);
            } else if (args[1] === 'eagle') {
              if (el === 0) return tobz.reply(from, 'Kamu tidak memiliki eagle di inventory!', id);
              if (el < args[2]) return tobz.reply(from, 'Kamu tidak punya eagle sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, 0, 0, 0, 0, 0, args[2], 0, hunt);
              levell.addLevelingXp(serial, args[2] * 30000, level);
              await tobz.reply(from, `Penjualan Eagle berhasil!\nJumlah xp didapatkan: ${args[2] * 30000}XP`, id);
            } else if (args[1] === 'orangutan') {
              if (ortu === 0) return tobz.reply(from, 'Kamu tidak memiliki orangutan di inventory!', id);
              if (ortu < args[2]) return tobz.reply(from, 'Kamu tidak punya orangutan sebanyak itu!', id);
              huntt.removeHuntHunt(serial, 0, 0, 0, 0, 0, 0, 0, orangutan, hunt);
              levell.addLevelingXp(serial, args[2] * 1000000, level);
              await tobz.reply(from, `Penjualan Orangutan berhasil!\nJumlah xp didapatkan: ${args[2] * 1000000}XP`, id);
            } else {
              tobz.reply(from, 'Tidak ada item tersebut!', id);
            }
          } else {
            tobz.reply(from, `Format salah! Contoh: ${prefix}sell pufferfish 100`, id);
          }
          break;
        }
        case `${prefix}hunt`:
          //tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
          {
            const buruana = ['🐗🦌🐃🦓🦒🐅🦅🦧'];
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            if (isPeluru(serial)) return tobz.reply(from, `Hai ${pushname}, peluru untuk kamu berburu sudah habis:( Kamu dapat membelinya di ${prefix}shop`, id);
            const checkIdq = huntt.getHuntId(sender.id, hunt);
            const lmtmining = limitt.getDeLimit(sender.id, delimit);
            if (lmtmining !== undefined && cds - (Date.now() - lmtmining) > 0) {
              const time = ms(cds - (Date.now() - lmtmining));
              await tobz.reply(from, `Predator sedang mengincarmu, bersembunyilah segera!\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
            } else if (isOwner) {
              if (checkIdq === undefined) {
                huntt.addHuntId(sender.id, hunt);
              } else {
                const amountXp = Math.floor(Math.random() * 100);
                const hunt1 = Math.floor(Math.random() * 8);
                const hunt2 = Math.floor(Math.random() * 3);
                const hunt3 = Math.floor(Math.random() * 8);
                const hunt4 = Math.floor(Math.random() * 3);
                const getXp = levell.getLevelingXp(sender.id, level);
                levell.addLevelingXp(sender.id, amountXp, level);
                huntt.addHuntHunt(sender.id, 0, hunt1, hunt2, hunt3, hunt4, 0, 0, 0, hunt);
                await tobz.reply(from, `Buruan yang bagus! Kamu mendapatkan:\n${hunt1}🦌\n${hunt2}🐃\n${hunt3}🦓\n${hunt4}🦒\ndan ${amountXp}XP\n\nCek ${prefix}huntinv untuk melihat hewan yang telah kamu tangkap!`, id);
              }
            } else {
              if (checkIdq === undefined) {
                huntt.addHuntId(sender.id, hunt);
              } else {
                await peluruAdd(serial);
                const amountXp = Math.floor(Math.random() * 100);
                const hunt1 = Math.floor(Math.random() * 8);
                const hunt2 = Math.floor(Math.random() * 3);
                const hunt3 = Math.floor(Math.random() * 8);
                const hunt4 = Math.floor(Math.random() * 3);
                const getXp = levell.getLevelingXp(sender.id, level);
                levell.addLevelingXp(sender.id, amountXp, level);
                huntt.addHuntHunt(sender.id, 0, hunt1, hunt2, hunt3, hunt4, 0, 0, 0, hunt);
                await tobz.reply(from, `Buruan yang bagus! Kamu mendapatkan:\n${hunt1}🦌\n${hunt2}🐃\n${hunt3}🦓\n${hunt4}🦒\ndan ${amountXp}XP\n\nCek ${prefix}huntinv untuk melihat hewan yang telah kamu tangkap!`, id);
              }
              limitt.addDeLimit(sender.id, delimit);
            }
          }

          break;
        case `${prefix}dig`:
          //tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            const temuan = ['Kamu menemukan harta karun!', 'Kamu tidak menemukan apapun :('];
            const temu = temuan[Math.floor(Math.random() * 2)];
            const currentLevelq = levell.getLevelingLevel(sender.id, level);
            const checkIdq = levell.getLevelingId(sender.id, level);
            const lmtmining = limitt.getDeLimit(sender.id, delimit);
            console.log(temu);
            if (lmtmining !== undefined && cdss - (Date.now() - lmtmining) > 0) {
              const time = ms(cdss - (Date.now() - lmtmining));
              await tobz.reply(from, `Jangan terlalu cepat! Beristirahatlah sejenak.\nSilakan tunggu *${time.seconds}* detik lagi.`, id);
            } else if (isOwner) {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                if (temu === temuan[0]) {
                  const amountXpq = Math.floor(Math.random() * 500);
                  const amountLimit = Math.floor(Math.random() * 3);
                  const getXpq = levell.getLevelingXp(sender.id, level);
                  levell.addLevelingXp(sender.id, amountXpq, level);
                  var found = false;
                  Object.keys(limit).forEach((i) => {
                    if (limit[i].id == sender.id) {
                      found = i;
                    }
                  });
                  if (found !== false) {
                    limit[found].limit -= amountLimit;
                    console.log(limit[found]);
                    fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
                  } else {
                    tobz.reply(from, `${monospace(`Nomor tidak terdaftar di database!`)}`, id);
                  }
                  await tobz.reply(from, `${temu} Kamu mendapatkan ${amountLimit} limit, dan ${amountXpq} xp`, id);
                } else {
                  const amountXpq = Math.floor(Math.random() * 500);
                  const getXpq = levell.getLevelingXp(sender.id, level);
                  levell.addLevelingXp(sender.id, amountXpq, level);
                  await tobz.reply(from, `${temu} Tapi kamu mendapatkan ${amountXpq} xp`, id);
                }
              }
            } else {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                if (temu === temuan[0]) {
                  const amountXpq = Math.floor(Math.random() * 500);
                  const amountLimit = Math.floor(Math.random() * 3);
                  const getXpq = levell.getLevelingXp(sender.id, level);
                  levell.addLevelingXp(sender.id, amountXpq, level);
                  var found = false;
                  Object.keys(limit).forEach((i) => {
                    if (limit[i].id == sender.id) {
                      found = i;
                    }
                  });
                  if (found !== false) {
                    limit[found].limit -= amountLimit;
                    console.log(limit[found]);
                    fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
                  } else {
                    tobz.reply(from, `${monospace(`Nomor tidak terdaftar di database!`)}`, id);
                  }
                  await tobz.reply(from, `${temu} Kamu mendapatkan ${amountLimit} limit, dan ${amountXpq} xp`, id);
                } else {
                  const amountXpq = Math.floor(Math.random() * 500);
                  const getXpq = levell.getLevelingXp(sender.id, level);
                  levell.addLevelingXp(sender.id, amountXpq, level);
                  await tobz.reply(from, `${temu} Tapi kamu mendapatkan ${amountXpq} xp`, id);
                }
              }
              limitt.addDeLimit(sender.id, delimit);
            }
          }

          break;
        case `${prefix}carding`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            const currentLevelq = levell.getLevelingLevel(sender.id, level);
            const checkIdq = levell.getLevelingId(sender.id, level);
            const lmtmining = limitt.getCLimit(sender.id, climit);
            if (lmtmining !== undefined && cdr - (Date.now() - lmtmining) > 0) {
              const time = ms(cdr - (Date.now() - lmtmining));
              await tobz.reply(from, `Bersantailah! Terlalu cepat membuat Divisi Cyber mencurigaimu.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`, id);
            } else if (isOwner) {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                const amountXpq = Math.floor(Math.random() * 1000) + 15000;
                const getXpq = levell.getLevelingXp(sender.id, level);
                levell.addLevelingXp(sender.id, amountXpq, level);
                await tobz.reply(from, `Kamu mendapatkan ${amountXpq} xp berkat carding kali ini!`, id);
              }
            } else {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                const amountXpq = Math.floor(Math.random() * 1000) + 15000;
                const getXpq = levell.getLevelingXp(sender.id, level);
                levell.addLevelingXp(sender.id, amountXpq, level);
                await tobz.reply(from, `Kamu mendapatkan ${amountXpq} xp berkat carding kali ini!`, id);
              }
              limitt.addCLimit(sender.id, climit);
            }
          }

          break;
        case `${prefix}dungeon`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            const currentLevelq = levell.getLevelingLevel(sender.id, level);
            const checkIdq = levell.getLevelingId(sender.id, level);
            const lmtmining = limitt.getDLimit(sender.id, dlimit);
            const dunji = 'https://4.bp.blogspot.com/-2NZ1Ng15Z4M/XWgtEUFohiI/AAAAAAAAMYY/aprU_y_XbVkYGyLw1NkE2gtf-WM4PR-0QCLcBGAs/w914-h514-p-k-no-nu/world-of-warcraft-classic-dungeon-dragon-uhdpaper.com-4K-3.891-wp.thumbnail.jpg';
            if (lmtmining !== undefined && cdrr - (Date.now() - lmtmining) > 0) {
              const time = ms(cdrr - (Date.now() - lmtmining));
              await tobz.reply(
                from,
                `Beristirahatlah karena pejuang hebat sekalipun membutuhkan istirahat untuk kembali melanjutkan sebuah perjuangan!\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`,
                id
              );
            } else if (isOwner) {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                tobz.sendFileFromUrl(from, dunji, 'dunji.jpg', '⚔️ *FIGHT* ⚔️', id);
                await sleep(3000);
                const amountXpq = Math.floor(Math.random() * 1000) + 30000;
                const getXpq = levell.getLevelingXp(sender.id, level);
                levell.addLevelingXp(sender.id, amountXpq, level);
                await tobz.reply(from, `Kamu berhasil mengalahkan monster! Kamu mendapat ${amountXpq} xp!`, id);
              }
            } else {
              if (currentLevelq === undefined && checkIdq === undefined) {
                levell.addLevelingId(sender.id, level);
              } else {
                tobz.sendFileFromUrl(from, dunji, 'dunji.jpg', '⚔️ *FIGHT* ⚔️', id);
                await sleep(3000);
                const amountXpq = Math.floor(Math.random() * 1000) + 30000;
                const getXpq = levell.getLevelingXp(sender.id, level);
                levell.addLevelingXp(sender.id, amountXpq, level);
                await tobz.reply(from, `Kamu berhasil mengalahkan monster! Kamu mendapat ${amountXpq} xp!`, id);
              }
              limitt.addDLimit(sender.id, dlimit);
            }
          }

          break;
        case `${prefix}menugroup`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (!isGroupMsg) return tobz.reply(from, 'Maaf, perintah ini hanya dapat digunakan didalam grup!', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case prefix + 'bot2':
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendContact(from, '6283113554285@c.us');
          break;
        case `${prefix}menuprem`:
        case `${prefix}vip`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (!isAdmin) return tobz.reply(from, 'Mohon maaf anda tidak bisa menggunakan fitur premium!', id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}maker`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}media`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}edukasi`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}funmenu`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}iklan`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendLinkWithAutoPreview(from, 'https://instagram.com/kayora.id', sewa());

          break;
        case `${prefix}poll`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}pray`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}weebs`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}shop`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.reply(from, shop(pushname), id);

          break;
        case `${prefix}game`:
        case `${prefix}getxp`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.reply(from, game(pushname), id);

          break;
        case `${prefix}tools`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}contact`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.reply(from, contact(), id);

          break;
        case `${prefix}anonymous`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}information`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}tnc`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.reply(from, tnc(), id);

          break;
        case `${prefix}others`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendText(from, `Jika membutuhkan menu ini silakan hubungi bot2, ketik ${prefix}bot2`, id);

          break;
        case `${prefix}readme`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.reply(from, readme(), id);

          break;
        case `${prefix}info`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendLinkWithAutoPreview(from, 'https://instagram.com/bdrsmsdn', info(), id);

          break;
        case `${prefix}snk`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          5;
          tobz.reply(from, snk(), id);

          break;
        case `${prefix}donasi`:
        case `${prefix}donate`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.reply(from, donate(), id);

          break;
        case `${prefix}cekprem`:
          if (!isAdmin) return tobz.reply(from, 'Anda bukan Member Premium, silakan hubungi owner untuk membeli akses Premium!', id);
          const cekExp = ms(premium.getPremiumExpired(sender.id, admin) - Date.now());
          var pic = await tobz.getProfilePicFromServer(author);
          if (pic == undefined) {
            var pfpp = errorurl;
          } else {
            var pfpp = pic;
          }
          tobz.sendFileFromUrl(
            from,
            pfpp,
            'photo.jpg',
            `
────「 *PREMIUM👑* 」────
+ *Name* : ${pushname}
+ *Number* : ${serial.replace(/@c.us/g, '')}
+ *Status* : *ACTIVE*
+ *Expired* : ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)
──────「 *LUCYA* 」──────`,
            id
          );

          break;
        case `${prefix}ping`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

          await limitAdd(serial);
          const loadedMsg = await tobz.getAmountOfLoadedMessages();
          const chatIds = await tobz.getAllChatIds();
          const groups = await tobz.getAllGroups();
          const me = await tobz.getMe();
          const battery = await tobz.getBatteryLevel();
          const isCharging = await tobz.getIsPlugged();
          await tobz.reply(
            from,
            `Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
                
*CPU :* ${os.cpus()[0].model}

*Status Lucya :*
- ${loadedMsg} Loaded Messages
- ${groups.length} Group Chats
- ${chatIds.length - groups.length} Personal Chats
- ${chatIds.length} Total Chats

*Status Device Lucya :*
${`*Battery : ${battery}% ${isCharging ? 'is Charging' : 'is not Charging'}
${Object.keys(me.phone)
  .map((key) => `${key} : ${me.phone[key]}`)
  .join('\n')}`.slice(1, -1)}

*Speed :* ${processTime(t, moment())} _second_ 
*Provider :* INDIHOME ASU`,
            id
          );

          break;

        //premium menu-------------------------------------------------------------------------------------------------------
        case `${prefix}stickergif`: // INSTALL FFMPEG, IF YOU WANT THIS COMMAND WORK!
        case `${prefix}stikergif`: // TUTORIAL IN README, PLEASE READ!
        case `${prefix}sgif`: // MRHRTZ
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

          await limitAdd(serial);
          const lmtsgif = limitt.getLimite(sender.id, limite);
          if (lmtsgif !== undefined && cd - (Date.now() - lmtsgif) > 0) {
            const time = ms(cd - (Date.now() - lmtsgif));
            await tobz.reply(from, `Kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`, id);
          } else if (isOwner) {
            tobz.reply(from, `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`, id);
            if ((isMedia && type === 'video') || mimetype === 'image/gif') {
              try {
                const mediaData = await decryptMedia(message, uaOverride);
                await tobz.sendMp4AsSticker(from, mediaData, { fps: 15, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 }, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' });
              } catch (e) {
                tobz.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`, id);
              }
            } else if ((quotedMsg && quotedMsg.type == 'video') || (quotedMsg && quotedMsg.mimetype == 'image/gif')) {
              const mediaData = await decryptMedia(quotedMsg, uaOverride);
              await tobz.sendMp4AsSticker(from, mediaData, { fps: 15, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 }, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' });
            } else {
              tobz.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik #sticker`, id);
            }
          } else {
            tobz.reply(from, `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`, id);
            if ((isMedia && type === 'video') || mimetype === 'image/gif') {
              try {
                const mediaData = await decryptMedia(message, uaOverride);
                await tobz.sendMp4AsSticker(from, mediaData, { fps: 15, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 }, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' });
              } catch (e) {
                tobz.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`, id);
              }
            } else if ((quotedMsg && quotedMsg.type == 'video') || (quotedMsg && quotedMsg.mimetype == 'image/gif')) {
              const mediaData = await decryptMedia(quotedMsg, uaOverride);
              await tobz.sendMp4AsSticker(from, mediaData, { fps: 15, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 }, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' });
            } else {
              tobz.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik ${prefix}sticker`, id);
            }
            limitt.addLimite(sender.id, limite);
          }

          break;
        case `${prefix}snbg`:
        case `${prefix}stickernobg`:
        case `${prefix}stikernobg`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (!isAdmin) return tobz.reply(from, 'Mohon maaf anda tidak bisa menggunakan fitur premium!', id);
          tobz.reply(from, `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`);
          if ((isMedia && type === 'image') || isQuotedImage) {
            const dataMediaas = isQuotedImage ? quotedMsg : message;
            const mediaData = await decryptMedia(dataMediaas, uaOverride);
            const getUrli = await uploadImages(mediaData, false);
            const imgnya = await snbg(getUrli);
            const nobg = imgnya.result.image;
            await tobz.sendStickerfromUrl(from, nobg);
          } else {
            await tobz.reply(from, 'Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !snbg', id);
          }

          break;
        case `${prefix}removebg`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (!isAdmin) return tobz.reply(from, 'Mohon maaf anda tidak bisa menggunakan fitur premium!', id);
          tobz.reply(from, `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`);
          if ((isMedia && type === 'image') || isQuotedImage) {
            const dataMediaas = isQuotedImage ? quotedMsg : message;
            const mediaData = await decryptMedia(dataMediaas, uaOverride);
            const getUrli = await uploadImages(mediaData, false);
            const imgnya = await snbg(getUrli);
            const nobg = imgnya.result.image;
            await tobz.sendFileFromUrl(from, nobg);
          } else {
            await tobz.reply(from, 'Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !removebg', id);
          }

          break;
        case `${prefix}buybait`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isOwner) return tobz.reply(from, 'Umpan anda *UNLIMITED*! Anda tidak perlu beli umpan lagi, yeay!!', id);
            //if (isGroupMsg) return tobz.reply(from, 'Pembelian hanya bisa dilakukan di chat personal!', id);
            if (args.length === 1) return tobz.reply(from, `Masukkan jumlah umpan yang akan dibeli! Contoh: ${prefix}buybait 100`, id);
            if (isNaN(args[1])) return tobz.reply(from, 'Hanya masukkan jumlah berupa angka!', id);
            if (args[1].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
            if (args[1].includes('.')) return tobz.reply(from, 'Gift tidak boleh menggunakan bilangan desimal!', id);
            const baite = args[1] * 5000;
            const userXpqq = levell.getLevelingXp(sender.id, level);
            if (userXpqq < baite) return tobz.reply(from, `Maaf XP anda kurang untuk membeli umpan! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
            levell.removeLevelingXp(sender.id, baite, level);
            var found = false;
            Object.keys(umpan).forEach((i) => {
              if (umpan[i].id == serial) {
                found = i;
              }
            });
            if (found !== false) {
              umpan[found].umpan -= args[1];
              const resultd = `${monospace(`Pembelian ${args[1]} umpan berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}. Cek jumlah umpan di ${prefix}bait`;
              console.log(umpan[found]);
              fs.writeFileSync('./lib/database/user/umpan.json', JSON.stringify(umpan));
              tobz.reply(from, resultd, id);
            } else {
              tobz.reply(from, `${monospace(`Terjadi kesalahan saat transaksi:(`)}`, id);
            }
          }

          break;
        case `${prefix}buybullet`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isOwner) return tobz.reply(from, 'Peluru anda *UNLIMITED*! Anda tidak perlu beli peluru lagi, yeay!!', id);
            //if (isGroupMsg) return tobz.reply(from, 'Pembelian hanya bisa dilakukan di chat personal!', id);
            if (args.length === 1) return tobz.reply(from, `Masukkan jumlah peluru yang akan dibeli! Contoh: ${prefix}buybullet 100`, id);
            if (isNaN(args[1])) return tobz.reply(from, 'Hanya masukkan jumlah berupa angka!', id);
            if (args[1].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
            if (args[1].includes('.')) return tobz.reply(from, 'Tidak boleh menggunakan bilangan desimal!', id);
            const baite = args[1] * 10000;
            const userXpqq = levell.getLevelingXp(sender.id, level);
            if (userXpqq < baite) return tobz.reply(from, `Maaf XP anda kurang untuk membeli peluru! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
            levell.removeLevelingXp(sender.id, baite, level);
            var found = false;
            Object.keys(peluru).forEach((i) => {
              if (peluru[i].id == serial) {
                found = i;
              }
            });
            if (found !== false) {
              peluru[found].peluru -= args[1];
              const resultd = `${monospace(`Pembelian ${args[1]} peluru berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}. Cek jumlah umpan di ${prefix}bullet`;
              console.log(peluru[found]);
              fs.writeFileSync('./lib/database/user/peluru.json', JSON.stringify(peluru));
              tobz.reply(from, resultd, id);
            } else {
              tobz.reply(from, `${monospace(`Terjadi kesalahan saat transaksi:(`)}`, id);
            }
          }

          break;
        case `${prefix}buylimit`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (isAdmin) return tobz.reply(from, 'Limit anda *UNLIMITED*! Anda tidak perlu beli limit lagi, yeay!!', id);
          //if (isGroupMsg) return tobz.reply(from, 'Pembelian hanya bisa dilakukan di chat personal!', id);
          if (args.length === 1) return tobz.reply(from, `Masukkan jumlah limit yang akan dibeli! Contoh: ${prefix}buylimit 100`, id);
          if (isNaN(args[1])) return tobz.reply(from, 'Hanya masukkan jumlah berupa angka!', id);
          if (args[1].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
          if (args[1].includes('.')) return tobz.reply(from, 'Gift tidak boleh menggunakan bilangan desimal!', id);
          const lumut = args[1] * 1000;
          const userXpqq = levell.getLevelingXp(sender.id, level);
          var found = false;
          if (userXpqq < lumut) return tobz.reply(from, `Maaf XP anda kurang untuk membeli limit! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
          levell.removeLevelingXp(sender.id, lumut, level);
          Object.keys(limit).forEach((i) => {
            if (limit[i].id == serial) {
              found = i;
            }
          });
          if (found !== false) {
            limit[found].limit -= args[1];
            const updatedd = limit[found];
            const resultd = `${monospace(`Pembelian ${args[1]} limit berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[User]: @${updatedd.id.replace('@c.us', '')}
[Limit]: ${limitCount - updatedd.limit}
[XP]: ${userXpqq}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Terima kasih. Gunakan dengan sebaik mungkin :)`;
            console.log(limit[found]);
            fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
            tobz.sendTextWithMentions(from, resultd, id);
          } else {
            tobz.reply(from, `${monospace(`Terjadi kesalahan saat transaksi:(`)}`, id);
          }

          break;

        case `${prefix}reedem`:
          {
            //if (isOwner) {
            if (args.length === 1) return tobz.reply(from, 'Silakan masukkan kode reedem! Kamu bisa mendapatkannya dengan follow ig https://instagram.com/bdrsmsdn dan cek highlightnya yaa! Penggunaan !reedem code', id);
            if (isReedem) return tobz.reply(from, 'Kamu pernah melakukan reedem! Tunggu informasi reedem selanjutnya di ig https://instagram.com/bdrsmsdn', id);
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isAdmin) return tobz.reply(from, 'Anda user premium! Anda tidak perlu menukarkan kode apapun:)', id);
            //if (isGroupMsg) return tobz.reply(from, 'Pembelian hanya bisa dilakukan di chat personal!', id);
            const key = args[1];
            if (key !== '2021lucya') return tobz.reply(from, 'Kode kamu tidak valid:(', id);
            reedem.push(serial);
            fs.writeFileSync('./lib/database/user/reedem.json', JSON.stringify(reedem));
            const xp1 = levell.getLevelingXp(sender.id, level);
            let position = false;
            var found = false;
            let woy = false;
            Object.keys(level).forEach((i) => {
              if (level[i].id == serial) {
                position = i;
              }
            });
            Object.keys(limit).forEach((i) => {
              if (limit[i].id == serial) {
                found = i;
              }
            });
            Object.keys(medialimit).forEach((i) => {
              if (medialimit[i].id == serial) {
                woy = i;
              }
            });
            if (found !== false || position !== false || woy !== false) {
              level[position].xp += 100000; //atur mau brp
              limit[found].limit -= 100; //ini jg
              medialimit[woy].medialimit -= 30; //ini jg
              const u1 = limit[found];
              const ui1 = level[position];
              const u2 = medialimit[woy];
              const r1 = `${monospace(`Reedem berhasil dengan kode ${key} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[User]: @${u1.id.replace('@c.us', '')}
[Limit]: ${limitCount - u1.limit}
[Media limit]: ${medialimitCount - u2.medialimit}
[XP]: ${xp1 - ui1.level}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Terima kasih. Gunakan dengan sebaik mungkin :)`;
              console.log(limit[found]);
              console.log(level[position]);
              console.log(medialimit[woy]);
              fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(level));
              fs.writeFileSync('./lib/database/user/medialimit.json', JSON.stringify(medialimit));
              fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
              tobz.sendTextWithMentions(from, r1, id);
            } else {
              tobz.reply(from, `${monospace(`Kode tidak valid!`)}`, id);
            }
          }
          //}

          break;
        case `${prefix}buylimed`:
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isAdmin) return tobz.reply(from, 'Limit media anda *UNLIMITED*! Anda tidak perlu beli limit lagi, yeay!!', id);
            //if (isGroupMsg) return tobz.reply(from, 'Pembelian hanya bisa dilakukan di chat personal!', id);
            if (args.length === 1) return tobz.reply(from, `Masukkan jumlah limed yang akan dibeli! Contoh: ${prefix}buylimed 100`, id);
            if (isNaN(args[1])) return tobz.reply(from, 'Hanya masukkan jumlah berupa angka!', id);
            if (args[1].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
            const lumut = args[1] * 5000;
            const userXpqq = levell.getLevelingXp(sender.id, level);
            var found = false;
            if (userXpqq < lumut) return tobz.reply(from, `Maaf XP anda kurang untuk membeli limed! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
            levell.removeLevelingXp(sender.id, lumut, level);
            Object.keys(medialimit).forEach((i) => {
              if (medialimit[i].id == serial) {
                found = i;
              }
            });
            if (found !== false) {
              medialimit[found].medialimit -= args[1];
              const updatedd = medialimit[found];
              const resultd = `${monospace(`Pembelian ${args[1]} medialimit berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[User]: @${updatedd.id.replace('@c.us', '')}
[Limit]: ${medialimitCount - updatedd.medialimit}
[XP]: ${userXpqq}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Terima kasih. Gunakan dengan sebaik mungkin :)`;
              console.log(medialimit[found]);
              fs.writeFileSync('./lib/database/user/medialimit.json', JSON.stringify(medialimit));
              tobz.sendTextWithMentions(from, resultd, id);
            } else {
              tobz.reply(from, `${monospace(`Terjadi kesalahan saat transaksi:(`)}`, id);
            }
          }
          break;
        case `${prefix}sewabot`:
          if (isGroupMsg) {
            tobz.sendText('6281281817375@c.us', `*[SEWA BOT]*\n\n*WAKTU* : ${time}\n*Nomor Pengirim* : wa.me/${sender.id.replace(/@c.us/g, '')}\n*Group* : ${formattedTitle}`);
            tobz.reply(from, `Silakan ketik ${prefix}donate untuk memilih metode pembayaran.\n\nJika sudah, hubungi wa.me/6281281817375 dan kirim bukti pembayaran.`, id);
          } else {
            tobz.sendText('6281281817375@c.us', `*[SEWA BOT]*\n\n*WAKTU* : ${time}\n*Nomor Pengirim* : wa.me/${sender.id.replace(/@c.us/g, '')}`);
            tobz.reply(from, `Silakan ketik ${prefix}donate untuk memilih metode pembayaran.\n\nJika sudah, hubungi wa.me/6281281817375 dan kirim bukti pembayaran.`, id);
          }

          break;
        case `${prefix}buypremium`:
          const wak = time;
          const nwe = `${SN}`;
          if (isGroupMsg) {
            buyerr.addPembeli(sender.id, nwe, wak, premer);
            tobz.sendText('6281281817375@c.us', `*[BUY PREMIUM]*\n\n*WAKTU* : ${wak}\n*ID Pengirim* : ${sender.id}\n*ID Pembelian: ${nwe}*\n*Group* : ${formattedTitle}`);
            tobz.reply(from, `Silakan ketik ${prefix}donate untuk memilih metode pembayaran.\n\nJika sudah, hubungi wa.me/6281281817375 dan kirim bukti pembayaran.`, id);
          } else {
            buyerr.addPembeli(sender.id, nwe, wak, premer);
            tobz.sendText('6281281817375@c.us', `*[BUY PREMIUM]*\n\n*WAKTU* : ${wak}\n*ID Pengirim* : ${sender.id}\n*ID Pembelian: ${nwe}*`);
            tobz.reply(from, `Silakan ketik ${prefix}donate untuk memilih metode pembayaran.\n\nJika sudah, hubungi wa.me/6281281817375 dan kirim bukti pembayaran.`, id);
          }

          break;
        case prefix + 'buyprem3':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (isAdmin) return tobz.reply(from, 'Kamu sudah jadi member premium!', id);
            const xp1 = levell.getLevelingXp(sender.id, level);
            const waktuna = '3d';
            let position = false;
            Object.keys(level).forEach((i) => {
              if (level[i].id == serial) {
                position = i;
              }
            });
            if (position !== false) {
              if (level[position].xp < 5000000) {
                return tobz.reply(from, `Maaf XP anda kurang untuk membeli item ini! Silakan ketik ${prefix}getxp untuk mendapatkan lebih banyak xp!`, id);
              } else {
                level[position].xp -= 5000000;
                premium.addPremiumUser(sender.id, waktuna, admin);
                await tobz.reply(
                  from,
                  `
────「 *PREMIUM👑* 」───
+ *Number*\t: ${serial.replace(/@c.us/g, '')}
+ *Status*\t\t: *ACTIVE*
+ *Code*\t\t\t: *SN-${SN}*
+ *Since*\t\t\t: ${timu}
+ *Expired*\t\t: 
${ms(toMs(waktuna)).days} day(s) ${ms(toMs(waktuna)).hours} hour(s) ${ms(toMs(waktuna)).minutes} minute(s)
Thx for Upgrade to Premium🥰
──────「 *LUCYA* 」────`,
                  id
                );
              }
            }
          }

          break;
        case `${prefix}giftlimit`:
          //if (!isGroupMsg) return tobz.reply(from, 'Gift hanya dapat dipakai didalam grup ya dik!', id);
          if (!isAdmin) return tobz.reply(from, 'Gift hanya untuk member premium ya!', id);
          //const nemer = args[1]
          //if(!nomer) return tobz.reply(from, `Masukkan nomor yang akan di gift, ${prefix}gift [NOMOR] [Jumlah]\n=> Contoh : ${prefix}gift 6281234567890 15`, id)
          //let textw = nemer.replace(/[@c.us]/g,'')
          const cus = mentionedJidList[0];
          const fakir = args[1] + '@c.us';
          const jml = args[2];
          if (mentionedJidList.length !== 0) {
            for (let benet of mentionedJidList) {
              if (benet === botNumber) return await tobz.reply(from, 'Lucya tidak bisa memberi limit untuk lucya sendiri:)', id);
              if (!jml) return tobz.reply(from, `Masukkan Jumlah gift quota, ${prefix}gift [NOMOR] [Jumlah]\n=> Contoh : ${prefix}gift @tag 15`, id);
              if (jml > 20) return await tobz.reply(from, 'Gift terlalu banyak, max 20 yaa :)', id);
              var found = false;
              Object.keys(limit).forEach((i) => {
                if (limit[i].id == cus) {
                  found = i;
                }
              });
              if (found !== false) {
                limit[found].limit = Math.max(0, limit[found].limit);
                if (limit[found].limit <= 24) return tobz.reply(from, 'Limit pada nomor tersebut masih penuh\nUntuk gift pastikan limit target sudah habis', id);
                if (limit[found].limit <= 0) {
                  return tobz.reply(from, 'Limit pada nomor tersebut sudah penuh :)', id);
                } else {
                  limit[found].limit -= jml;
                  const updated = limit[found];
                  const result = `${monospace(`Gift limit berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}
    ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
    [User]: @${updated.id.replace('@c.us', '')}
    [Limit]: ${limitCount - updated.limit}
    ⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
    Terima kasih. Gunakan dengan sebaik mungkin :)`;
                  console.log(limit[found]);
                  fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
                  tobz.sendTextWithMentions(from, result, id);
                }
              } else {
                tobz.reply(from, `${monospace(`Nomor tidak terdaftar di database!`)}`, id);
              }
            }
          } else {
            if (!jml) return tobz.reply(from, `Masukkan Jumlah gift quota, ${prefix}gift [NOMOR] [Jumlah]\n=> Contoh : ${prefix}gift 62821XXX 15`, id);
            if (jml > 20) return await tobz.reply(from, 'Gift terlalu banyak, max 20 yaa :)', id);
            var found = false;
            Object.keys(limit).forEach((i) => {
              if (limit[i].id == fakir) {
                found = i;
              }
            });
            if (found !== false) {
              limit[found].limit = Math.max(0, limit[found].limit);
              if (limit[found].limit <= 24) return tobz.reply(from, 'Limit pada nomor tersebut masih penuh\nUntuk gift pastikan limit target sudah habis', id);
              if (limit[found].limit <= 0) {
                return tobz.reply(from, 'Limit pada nomor tersebut sudah penuh :)', id);
              } else {
                limit[found].limit -= jml;
                const updated = limit[found];
                const result = `${monospace(`Gift limit berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}`)}
    ₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
    [User]: @${updated.id.replace('@c.us', '')}
    [Limit]: ${limitCount - updated.limit}
    ⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
    Terima kasih. Gunakan dengan sebaik mungkin :)`;
                console.log(limit[found]);
                fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit));
                tobz.sendTextWithMentions(from, result, id);
              }
            } else {
              tobz.reply(from, `${monospace(`Nomor tidak terdaftar di database!`)}`, id);
            }
          }

          break;
        case prefix + 'redxp':
          if (!isOwner) return tobz.reply(from, 'Khusus Owner!', id);
          if (args.length !== 3) return tobz.reply(from, `Format salah! Gunakan ${prefix}redxp @tag jumlah`, id);
          if (mentionedJidList.length !== 0) {
            for (let give of mentionedJidList) {
              levell.removeLevelingXp(give, Number(args[2]), level);
              await tobz.reply(from, `Sukses mengurangi XP milik: ${give}\nJumlah dikurang: ${args[2]}`, id);
            }
          } else {
            levell.removeLevelingXp(args[1] + '@c.us', Number(args[2]), level);
            await tobz.reply(from, `Sukses mengurangi XP milik: ${args[1]}\nJumlah dikurang: ${args[2]}`, id);
          }
          break;
        case prefix + 'giftxp':
          if (!isOwner) return tobz.reply(from, 'Khusus Owner!', id);
          if (args.length !== 3) return tobz.reply(from, `Format salah! Gunakan ${prefix}giftxp @tag jumlah`, id);
          if (mentionedJidList.length !== 0) {
            for (let give of mentionedJidList) {
              levell.addLevelingXp(give, Number(args[2]), level);
              await tobz.reply(from, `Sukses menambah XP kepada: ${give}\nJumlah ditambahkan: ${args[2]}`, id);
            }
          } else {
            levell.addLevelingXp(args[1] + '@c.us', Number(args[2]), level);
            await tobz.reply(from, `Sukses menambah XP kepada: ${args[1]}\nJumlah ditambahkan: ${args[2]}`, id);
          }
          break;
        case prefix + 'giftxpto':
          {
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            if (args.length !== 3) return tobz.reply(from, `Format salah! Gunakan ${prefix}giftxpto @tag jumlah`, id);
            if (isNaN(args[2])) return tobz.reply(from, 'XP yang dikirim hanya berupa angka!');
            if (args[2].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
            if (args[2].includes('.')) return tobz.reply(from, 'Gift tidak boleh menggunakan bilangan desimal!', id);
            if (args[1] === botNumber || args[1] === '@' + botNumber) return tobz.reply(from, 'Lucya tidak bisa menerima pemberian gift:)', id);
            const xp1 = levell.getLevelingXp(sender.id, level);
            let position = false;
            Object.keys(level).forEach((i) => {
              if (level[i].id == serial) {
                position = i;
              }
            });
            if (position !== false) {
              if (level[position].xp < args[2]) {
                return tobz.reply(from, `XP kamu kurang untuk memberi sebanyak itu!`, id);
              } else {
                level[position].xp -= args[2];
                if (mentionedJidList.length !== 0) {
                  for (let give of mentionedJidList) {
                    levell.addLevelingXp(give, Number(args[2]), level);
                    await tobz.sendTextWithMentions(from, `Sukses memberi XP kepada: @${give} dengan jumlah: ${args[2]}XP`, id);
                  }
                } else {
                  levell.addLevelingXp(args[1] + '@c.us', Number(args[2]), level);
                  await tobz.sendTextWithMentions(from, `Sukses memberi XP kepada: @${args[1]} dengan jumlah: ${args[2]}XP`, id);
                }
              }
            }
          }
          break;

        //maker menu--------------------------------------------------------------------------------------------------

        case prefix + 'exif':
          if (!isOwner) return await tobz.reply(from, 'Fitur ini khusus Owner!', id);
          arg = body.trim().split('|');
          const namaPack = arg[1];
          const authorPack = arg[2];
          exif.create(namaPack, authorPack);
          await tobz.reply(from, 'Berhasil!', id);

          break;
        case prefix + 'stickerwm': // By Slavyan
        case prefix + 'stikerwm':
          if (!isAdmin) return await tobz.reply(from, 'Maaf kamu tidak bisa menggunakan fitur premium!', id);
          //if (!q.includes('|')) return await tobz.reply(from, 'Format salah!', id)
          if ((isMedia && isImage) || isQuotedImage) {
            await tobz.reply(from, mess.wait, id);
            arg = body.trim().split('|');
            const packname = arg[1];
            const author = arg[2];
            exif.create(packname, author, `stc_${sender.id}`);
            const encryptMedia = isQuotedImage ? quotedMsg : message;
            const mediaData = await decryptMedia(encryptMedia, uaOverride);
            webp
              .buffer2webpbuffer(mediaData, 'jpg', '-q 100')
              .then((res) => {
                sharp(res)
                  .resize(512, 512)
                  .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                    if (err) return console.error(err);
                    await exec(`webpmux -set exif ./temp/stc_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true });
                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                      const data = fs.readFileSync(`./temp/${sender.id}.webp`);
                      const base64 = `data:image/webp;base64,${data.toString('base64')}`;
                      await tobz.sendRawWebpAsSticker(from, base64);
                      // console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                      fs.unlinkSync(`./temp/${sender.id}.webp`);
                      fs.unlinkSync(`./temp/stage_${sender.id}.webp`);
                      fs.unlinkSync(`stc_${sender.id}`);
                      await tobz.sendRawWebpAsSticker(from, base64);
                    }
                  });
              })
              .catch(async (err) => {
                console.error(err);
                await tobz.reply(from, 'Error!', id);
              });
          } else {
            await tobz.reply(from, 'Format salah!', id);
          }

          break;
        case prefix + 'takestick': // By: VideFrelan
          if (!isAdmin) return await tobz.reply(from, 'Maaf kamu tidak bisa menggunakan fitur premium!', id);
          //if (!argq.includes('|')) return await tobz.reply(from, 'Format salah!', id)
          if (quotedMsg && quotedMsg.type == 'sticker') {
            const mediaDataTake = await decryptMedia(quotedMsg, uaOverride);
            await tobz.reply(from, mess.wait, id);
            arg = body.trim().split('|');
            const packnames = arg[1];
            const authors = arg[2];
            exif.create(packnames, authors, `take_${sender.id}`);
            webp
              .buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
              .then((res) => {
                sharp(res)
                  .resize(512, 512)
                  .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                    if (err) return console.error(err);
                    await exec(`webpmux -set exif ./temp/take_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true });
                    if (fs.existsSync(`./temp${sender.id}.webp`)) {
                      const data = fs.readFileSync(`./temp/${sender.id}.webp`);
                      const base64 = `data:image/webp;base64,${data.toString('base64')}`;
                      await tobz.sendRawWebpAsSticker(from, base64);
                      console.log(`Sticker processed for ${processTime(t, moment())} seconds`);
                      fs.unlinkSync(`./temp/${sender.id}.webp`);
                      fs.unlinkSync(`./temp/stage_${sender.id}.webp`);
                      fs.unlinkSync(`./temp/take_${sender.id}.exif`);
                    }
                  });
              })
              .catch(async (err) => {
                console.error(err);
                await tobz.reply(from, 'Error!', id);
              });
          } else {
            await tobz.reply(from, 'Format salah!', id);
          }

          break;

          break;
        case prefix + 'toimg':
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          //if (!isAdmin) return tobz.reply(from, 'Mohon maaf anda tidak bisa menggunakan fitur premium!', id)
          if (quotedMsg && quotedMsg.type == 'sticker') {
            const mediaData = await decryptMedia(quotedMsg);
            tobz.reply(from, `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`);
            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`;
            await tobz.sendFile(from, imageBase64, 'imagesticker.jpg', mess.follow, id);
          } else if (!quotedMsg) return tobz.reply(from, 'Mohon tag sticker yang ingin dijadikan gambar!', id);

          break;
        case `${prefix}sticker`:
        case `${prefix}stiker`:
        case `${prefix}s`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (isMedia && type === 'image') {
            const mediaData = await decryptMedia(message, uaOverride);
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`;
            await tobz.sendImageAsSticker(from, imageBase64, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' });
          } else if (quotedMsg && quotedMsg.type == 'image') {
            const mediaData = await decryptMedia(quotedMsg, uaOverride);
            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`;
            await tobz.sendImageAsSticker(from, imageBase64, { author: 'Follow ig @bdrsmsdn', keepScale: true, pack: 'Lucya-BOT' });
          } else if (args.length === 2) {
            const url = args[1];
            if (url.match(isUrl)) {
              await tobz.sendStickerfromUrl(from, url, { method: 'get' }).catch((err) => console.log('Caught exception: ', err));
            } else {
              tobz.reply(from, mess.error.Iv, id);
            }
          } else {
            tobz.reply(from, mess.error.St, id);
          }

          break;
        case prefix + 'stickerp':
        case prefix + 'stikerp':
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if ((isMedia && isImage) || isQuotedImage) {
            const encryptMedia = isQuotedImage ? quotedMsg : message;
            const mediaData = await decryptMedia(encryptMedia, uaOverride);
            webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100').then((res) => {
              sharp(res)
                .resize({
                  width: 512,
                  height: 512,
                  fit: 'contain',
                  background: {
                    r: 255,
                    g: 255,
                    b: 255,
                    alpha: 0,
                  },
                })
                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                  if (err) return console.error(err);
                  await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true });
                  if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                    const data = fs.readFileSync(`./temp/${sender.id}.webp`);
                    const base64 = `data:image/webp;base64,${data.toString('base64')}`;
                    // console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    fs.unlinkSync(`./temp/${sender.id}.webp`);
                    fs.unlinkSync(`./temp/stage_${sender.id}.webp`);
                    await tobz.sendRawWebpAsSticker(from, base64);
                  }
                });
            });
          } else {
            await tobz.reply(from, 'Format salah!', id);
          }

          break;
        // case prefix + 'trigger': //tobz
        //   if (!isRegis) return tobz.reply(from, mess.notReg, id);
        //   if ((isMedia && isImage) || isQuotedImage) {
        //     await tobz.reply(from, mess.wait, id);
        //     const encryptMedia = isQuotedImage ? quotedMsg : message;
        //     console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...');
        //     const mediaData = await decryptMedia(encryptMedia, uaOverride);
        //     const temp = './temp';
        //     const name = new Date() * 1;
        //     const fileInputPath = path.join(temp, `${name}.gif`);
        //     const fileOutputPath = path.join(temp, 'video', `${name}.mp4`);
        //     canvas.Canvas.trigger(mediaData).then((buffer) => {
        //       canvas.write(buffer, fileInputPath);
        //       ffmpeg(fileInputPath)
        //         .outputOptions(['-movflags faststart', '-pix_fmt yuv420p', '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'])
        //         .inputFormat('gif')
        //         .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
        //         .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
        //         .on('end', async () => {
        //           console.log(color('[FFmpeg]', 'green'), 'Processing finished!');
        //           await tobz.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 });
        //           console.log(color('[WAPI]', 'green'), 'Success sending GIF!');
        //           setTimeout(() => {
        //             fs.unlinkSync(fileInputPath);
        //             fs.unlinkSync(fileOutputPath);
        //           }, 30000);
        //         })
        //         .save(fileOutputPath);
        //     });
        //   } else {
        //     await tobz.reply(from, mess.wait, id);
        //     const ppRaw = await tobz.getProfilePicFromServer(sender.id);
        //     console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...');
        //     const mediaData = await decryptMedia(ppRaw, uaOverride);
        //     const temp = './temp';
        //     const name = new Date() * 1;
        //     const fileInputPath = path.join(temp, `${name}.gif`);
        //     const fileOutputPath = path.join(temp, 'video', `${name}.mp4`);
        //     canvas.Canvas.trigger(mediaData).then((buffer) => {
        //       canvas.write(buffer, fileInputPath);
        //       ffmpeg(fileInputPath)
        //         .outputOptions(['-movflags faststart', '-pix_fmt yuv420p', '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'])
        //         .inputFormat('gif')
        //         .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
        //         .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
        //         .on('end', async () => {
        //           console.log(color('[FFmpeg]', 'green'), 'Processing finished!');
        //           await tobz.sendVideoAsGif(from, fileOutputPath, 'triggered.gif', '', id);
        //           console.log(color('[WAPI]', 'green'), 'Success sending GIF!');
        //           setTimeout(() => {
        //             fs.unlinkSync(fileInputPath);
        //             fs.unlinkSync(fileOutputPath);
        //           }, 30000);
        //         })
        //         .save(fileOutputPath);
        //     });
        //   }

        //   break;
        case `${prefix}spamtag`:
          {
            if (isAdmin) {
              if (!isRegis) return tobz.reply(from, mess.notReg, id);
              if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

              await limitAdd(serial);
              if (args.length === 1) return tobz.reply(from, `Kirim perintah *${prefix}spamtag |nomor|jumlah|teks*`, id);
              arg = body.trim().split('|');
              const hhq = mentionedJidList;
              const jhal = arg[2];
              const knj = arg[3];
              if (!isOwner && jhal > 20) return tobz.reply(from, 'Maksimal hanya 20!', id);
              if (arg.length >= 4) {
                for (let i = 0; i < jhal; i++) {
                  await tobz.sendTextWithMentions(from, `@${hhq} ${knj}`, id);
                }
                tobz.reply(from, `Berhasil mengirim spamtag sebanyak ${jhal}`, id);
              } else {
                tobz.reply(from, 'Format salah!', id);
              }
            }
          }

          break;
        case prefix + 'slot':
          //tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
          if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

          await limitAdd(serial);
          const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)];
          const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)];
          const somtoy3 = sotoy[Math.floor(Math.random() * sotoy.length)];
          const limitslot = limitt.getSLimit(sender.id, slimit);
          if (limitslot !== undefined && cdslot - (Date.now() - limitslot) > 0) {
            const time = ms(cdslot - (Date.now() - limitslot));
            await tobz.reply(from, `Tahan dulu sebentar! Kamu tidak mau mesinnya jadi rusak kan?:(.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`, id);
          } else if (isOwner) {
            tobz.sendText(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy2}\n${somtoy}<=====\n${somtoy3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, id);
            if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || somtoy === sotoy[19]) {
              levell.addLevelingXp(sender.id, 5000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 5000XP!`, id);
            } else if (somtoy2 === sotoy[8] || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || somtoy2 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 3000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 3000XP!`, id);
            } else if (somtoy3 === sotoy[8] || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 3000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 3000XP!`, id);
            } else if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || (somtoy === sotoy[19] && somtoy2 === sotoy[8]) || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || somtoy2 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 10000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 10000XP!`, id);
            } else if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || (somtoy === sotoy[19] && somtoy3 === sotoy[8]) || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 10000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 10000XP!`, id);
            } else if (somtoy2 === sotoy[8] || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || (somtoy2 === sotoy[19] && somtoy3 === sotoy[8]) || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 10000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 10000XP!`, id);
            } else if (
              somtoy === sotoy[8] ||
              somtoy === sotoy[17] ||
              somtoy === sotoy[18] ||
              (somtoy === sotoy[19] && somtoy3 === sotoy[8]) ||
              somtoy3 === sotoy[17] ||
              somtoy3 === sotoy[18] ||
              (somtoy3 === sotoy[19] && somtoy2 === sotoy[8]) ||
              somtoy2 === sotoy[17] ||
              somtoy2 === sotoy[18] ||
              somtoy2 === sotoy[19]
            ) {
              levell.addLevelingXp(sender.id, 50000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 50000XP!`, id);
            } else if (somtoy === sotoy[20] || somtoy2 === sotoy[20] || somtoy3 === sotoy[20]) {
              levell.addLevelingXp(sender.id, 50000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 50000XP!`, id);
            }
          } else {
            tobz.sendText(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy2}\n${somtoy}<=====\n${somtoy3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, id);
            if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || somtoy === sotoy[19]) {
              levell.addLevelingXp(sender.id, 5000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 5000XP!`, id);
            } else if (somtoy2 === sotoy[8] || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || somtoy2 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 3000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 3000XP!`, id);
            } else if (somtoy3 === sotoy[8] || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 3000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 3000XP!`, id);
            } else if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || (somtoy === sotoy[19] && somtoy2 === sotoy[8]) || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || somtoy2 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 10000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 10000XP!`, id);
            } else if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || (somtoy === sotoy[19] && somtoy3 === sotoy[8]) || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 10000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 10000XP!`, id);
            } else if (somtoy2 === sotoy[8] || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || (somtoy2 === sotoy[19] && somtoy3 === sotoy[8]) || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
              levell.addLevelingXp(sender.id, 10000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 10000XP!`, id);
            } else if (
              somtoy === sotoy[8] ||
              somtoy === sotoy[17] ||
              somtoy === sotoy[18] ||
              (somtoy === sotoy[19] && somtoy3 === sotoy[8]) ||
              somtoy3 === sotoy[17] ||
              somtoy3 === sotoy[18] ||
              (somtoy3 === sotoy[19] && somtoy2 === sotoy[8]) ||
              somtoy2 === sotoy[17] ||
              somtoy2 === sotoy[18] ||
              somtoy2 === sotoy[19]
            ) {
              levell.addLevelingXp(sender.id, 50000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 50000XP!`, id);
            } else if (somtoy === sotoy[20] || somtoy2 === sotoy[20] || somtoy3 === sotoy[20]) {
              levell.addLevelingXp(sender.id, 50000, level);
              await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan 50000XP!`, id);
            }
            limitt.addSLimit(sender.id, slimit);
          }

          break;
        case prefix + 'spinslot':
          {
            //tobz.reply(from, 'Hai! Demi mencegah terjadinya banned dari pihak WhatsApp, untuk sementara beberapa fitur dimatikan dulu ya! Nantikan update terbaru di Grup Official Informasi Lucya. Mau join? ketik !lucyagroup', id)
            if (!isRegis) return tobz.reply(from, mess.notReg, id);
            //if (isGroupMsg) return tobz.reply(from, 'Maaf, demi kenyamanan perintah ini hanya bisa digunakan secara chat personal!', id)
            if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

            await limitAdd(serial);
            if (args.length === 1) return tobz.reply(from, 'Masukkan jumlah XP!', id);
            if (isNaN(args[1])) return tobz.reply(from, 'XP hanya berupa angka!');
            if (args[1].startsWith('-')) return tobz.reply(from, 'Hanya masukkan bilangan bulat positif!', id);
            if (args[1].includes('.')) return tobz.reply(from, 'XP tidak boleh menggunakan bilangan desimal!', id);
            const xp1 = levell.getLevelingXp(sender.id, level);
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)];
            const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)];
            const somtoy3 = sotoy[Math.floor(Math.random() * sotoy.length)];
            const limitslot = limitt.getSLimit(sender.id, slimit);
            if (limitslot !== undefined && cdslot - (Date.now() - limitslot) > 0) {
              const time = ms(cdslot - (Date.now() - limitslot));
              await tobz.reply(from, `Tahan dulu sebentar! Kamu tidak mau mesinnya jadi rusak kan?:(.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`, id);
            } else if (isOwner) {
              if (xp1 < args[1]) return tobz.reply(from, 'XP yang kamu taruhkan kurang dari XP yang kamu punya!', id);
              levell.removeLevelingXp(sender.id, args[1], level);
              tobz.sendText(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy2}\n${somtoy}<=====\n${somtoy3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, id);
              if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || somtoy === sotoy[19]) {
                levell.addLevelingXp(sender.id, args[1] * 3, level);
                await tobz.reply(from, `Kamu menaruhkan ${args[1]}XP dan mendapatkan ${args[1] * 3}XP! Selamat!!`, id);
              } else if (somtoy2 === sotoy[8] || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || somtoy2 === sotoy[19]) {
                levell.addLevelingXp(sender.id, args[1] * 2, level);
                await tobz.reply(from, `Kamu menaruhkan ${args[1]}XP dan mendapatkan ${args[1] * 2}XP! Selamat!!`, id);
              } else if (somtoy3 === sotoy[8] || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
                levell.addLevelingXp(sender.id, args[1] * 2, level);
                await tobz.reply(from, `Kamu menaruhkan ${args[1]}XP dan mendapatkan ${args[1] * 2}XP! Selamat!!`, id);
              } else if (somtoy === sotoy[20] || somtoy2 === sotoy[20] || somtoy3 === sotoy[20]) {
                levell.addLevelingXp(sender.id, args[1] * 5, level);
                await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan ${args[1] * 5}XP!`, id);
              } else {
                tobz.reply(from, `Kamu belum menang di game kali ini! :(`, id);
              }
            } else {
              if (xp1 < args[1]) return tobz.reply(from, 'XP yang kamu taruhkan kurang dari XP yang kamu punya!', id);
              levell.removeLevelingXp(sender.id, args[1], level);
              tobz.sendText(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy2}\n${somtoy}<=====\n${somtoy3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, id);
              if (somtoy === sotoy[8] || somtoy === sotoy[17] || somtoy === sotoy[18] || somtoy === sotoy[19]) {
                levell.addLevelingXp(sender.id, args[1] * 3, level);
                await tobz.reply(from, `Kamu menaruhkan ${args[1]}XP dan mendapatkan ${args[1] * 3}XP! Selamat!!`, id);
              } else if (somtoy2 === sotoy[8] || somtoy2 === sotoy[17] || somtoy2 === sotoy[18] || somtoy2 === sotoy[19]) {
                levell.addLevelingXp(sender.id, args[1] * 2, level);
                await tobz.reply(from, `Kamu menaruhkan ${args[1]}XP dan mendapatkan ${args[1] * 2}XP! Selamat!!`, id);
              } else if (somtoy3 === sotoy[8] || somtoy3 === sotoy[17] || somtoy3 === sotoy[18] || somtoy3 === sotoy[19]) {
                levell.addLevelingXp(sender.id, args[1] * 2, level);
                await tobz.reply(from, `Kamu menaruhkan ${args[1]}XP dan mendapatkan ${args[1] * 2}XP! Selamat!!`, id);
              } else if (somtoy === sotoy[20] || somtoy2 === sotoy[20] || somtoy3 === sotoy[20]) {
                levell.addLevelingXp(sender.id, args[1] * 5, level);
                await tobz.reply(from, `Selamat ${pushname} kamu menang dan mendapatkan ${args[1] * 5}XP!`, id);
              } else {
                tobz.reply(from, `Kamu belum menang di game kali ini! :(`, id);
              }
              limitt.addSLimit(sender.id, slimit);
            }
          }

          break;

        // ON/OFF & admin group menu--------------------------------------------------------------------------------------------------------------------------------------------------------

        case `${prefix}antivirtex`:
          if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id);
          if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id);
          if (args[1].toLowerCase() === 'enable') {
            virtex.push(chat.id);
            fs.writeFileSync('./lib/database/group/virtex.json', JSON.stringify(virtex));
            tobz.reply(from, 'Fitur Anti Virtex berhasil di aktifkan di group ini!', id);
          } else if (args[1].toLowerCase() === 'disable') {
            virtex.splice(chat.id, 1);
            fs.writeFileSync('./lib/database/group/virtex.json', JSON.stringify(virtex));
            tobz.reply(from, 'Fitur Anti Virtex berhasil di nonaktifkan di group ini!', id);
          } else {
            tobz.reply(from, 'Pilih enable atau disable!', id);
          }

          break;
        case `${prefix}nobadword`:
          if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id);
          if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id);
          if (args[1].toLowerCase() === 'enable') {
            badword.push(chat.id);
            fs.writeFileSync('./lib/database/group/badword.json', JSON.stringify(badword));
            tobz.reply(from, 'Fitur Anti BadWord berhasil di aktifkan di group ini!', id);
          } else if (args[1].toLowerCase() === 'disable') {
            badword.splice(chat.id, 1);
            fs.writeFileSync('./lib/database/group/badword.json', JSON.stringify(badword));
            tobz.reply(from, 'Fitur Anti BadWord berhasil di nonaktifkan di group ini!', id);
          } else {
            tobz.reply(from, 'Pilih enable atau disable!', id);
          }

          break;
        case `${prefix}nolinkgc`:
          if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id);
          if (args.length === 1) return tobz.reply(from, 'Pilih enable atau disable!', id);
          if (args[1].toLowerCase() === 'enable') {
            NoLink.push(chat.id);
            fs.writeFileSync('./lib/database/group/NoLink.json', JSON.stringify(NoLink));
            tobz.reply(from, 'Fitur NoLink berhasil di aktifkan di group ini!', id);
          } else if (args[1].toLowerCase() === 'disable') {
            NoLink.splice(chat.id, 1);
            fs.writeFileSync('./lib/database/group/NoLink.json', JSON.stringify(NoLink));
            tobz.reply(from, 'Fitur NoLink berhasil di nonaktifkan di group ini!', id);
          } else {
            tobz.reply(from, 'Pilih enable atau disable!', id);
          }

          break;
        case `${prefix}autosticker`:
        case `${prefix}autostiker`:
        case `${prefix}autostik`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id);
          if (args[1] === 'enable') {
            if (isAutoStikerOn) return await tobz.reply(from, 'Fitur ini sudah aktif!', id);
            autostiker.push(chat.id);
            fs.writeFileSync('./lib/database/group/autostiker.json', JSON.stringify(autostiker));
            await tobz.reply(from, 'Berhasil mengaktifkan Auto Stiker!', id);
          } else if (args[1] === 'disable') {
            autostiker.splice(chat.id, 1);
            fs.writeFileSync('./lib/database/group/autostiker.json', JSON.stringify(autostiker));
            await tobz.reply(from, 'Berhasil menonaktifkan Auto Stiker!', id);
          } else {
            await tobz.reply(from, 'pilih enable/disable!', id);
          }

          break;
        case `${prefix}mentionall`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota limit kamu sudah habis:( Kamu dapat menukarkan XP yang kamu punya dengan limit. Caranya ketik ${prefix}shop`, id);

          await limitAdd(serial);
          if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa digunakan dalam group!', id);
          if (!isGroupAdmins) return tobz.reply(from, 'Perintah ini hanya bisa digunakan oleh admin group', id);
          const groupMem = await tobz.getGroupMembers(groupId);
          const lastEveryone = limitt.getLimite(sender.id, limite);
          if (lastEveryone !== undefined && cd - (Date.now() - lastEveryone) > 0) {
            const time = ms(cd - (Date.now() - lastEveryone));
            await tobz.reply(from, `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`, id);
          } else if (isOwner) {
            let txt = `${body.slice(12)} - ${pushname}\n`;
            for (let i = 0; i < groupMem.length; i++) {
              txt += '-';
              txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`;
            }
            txt += '';
            await tobz.sendTextWithMentions(from, txt);
          } else {
            let txt = `${body.slice(12)} - ${pushname}\n`;
            for (let i = 0; i < groupMem.length; i++) {
              txt += '-';
              txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`;
            }
            txt += '';
            await tobz.sendTextWithMentions(from, txt);
            limitt.addLimite(sender.id, limite);
          }

          break;
        //words
        case `lucya`:
        case `luu`:
        case `lucyaa`:
        case `lulu`:
        case `luluu`:
          const jwb = ['iya, kak?', 'siap!', 'gimana kak?', 'apa?', 'iyaa', 'halo kak, lulu disini', 'kenapa kak'];
          let blsn = jwb[Math.floor(Math.random() * jwb.length)];
          tobz.reply(from, blsn, id);

          break;
        //contact
        case `${prefix}creator`:
        case `${prefix}admin`:
        case `${prefix}owner`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          tobz.sendContact(from, '6281281817375@c.us');

          break;
        case `${prefix}bugreport`:
          if (!isRegis) return tobz.reply(from, mess.notReg, id);
          if (args.length === 1) return tobz.reply(from, '[❗] Kirim perintah !bugreport [teks]\ncontoh : !bugreport Permisi Owner, Ada bug pada command !otakudesu, Tolong diperbaiki');
          const bug = body.slice(11);
          if (isGroupMsg) {
            tobz.sendText('6281281817375@c.us', `*[BUG REPORT]*\n*WAKTU* : ${time}\n*Nama Pengirim* : ${pushname}\n*Group* : ${formattedTitle}\n\n${bug}`);
            tobz.reply(from, 'Masalah telah di laporkan ke owner Lucya, laporan palsu/main2 tidak akan ditanggapi.', id);
          } else {
            tobz.sendText('6281281817375@c.us', `*[BUG REPORT]*\n*WAKTU* : ${time}\n*Nama Pengirim* : ${pushname}\n\n${bug}`);
            tobz.reply(from, 'Masalah telah di laporkan ke owner Lucya, laporan palsu/main2 tidak akan ditanggapi.', id);
          }

          break;
        case `${prefix}restart`: // WORK IF YOU RUN USING PM2
          if (isOwner) {
            tobz.sendText(from, '*[WARN]* Restarting ...');
            setting.restartState = true;
            setting.restartId = chatId;
            var obj = [];
            //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
            fs.writeFileSync('./lib/database/buyer.json', JSON.stringify(obj));
            fs.writeFileSync('./lib/database/group/welcome.json', JSON.stringify(obj));
            fs.writeFileSync('./lib/database/group/left.json', JSON.stringify(obj));
            fs.writeFileSync('./lib/database/group/nsfw.json', JSON.stringify(obj));
            const spawn = require('child_process').exec;
            function os_func() {
              this.execCommand = function (command) {
                return new Promise((resolve, reject) => {
                  spawn(command, (error, stdout, stderr) => {
                    if (error) {
                      reject(error);
                      return;
                    }
                    resolve(stdout);
                  });
                });
              };
            }
            var oz = new os_func();
            oz.execCommand('pm2 restart index')
              .then((res) => {})
              .catch((err) => {
                console.log('os >>>', err);
              });
          }

          break;
        case `${prefix}lucyagroup`:
        case `${prefix}lucyagrup`:
          tobz.reply(
            from,
            `➥ *Grup Official Informasi Lucya-BOT I* ketik ${prefix}joingrup
➥ *Grup Official Informasi Lucya-BOT II* ketik ${prefix}joingrup2
➥ *Grup Bot Tester* ketik ${prefix}joingrup3`,
            id
          );

          break;
        default:
          if (command.startsWith(`${prefix}`)) {
            tobz.reply(from, `Maaf ${pushname}, Command *${args[0]}* Tidak Terdaftar Di Dalam *${prefix}menu*!`, id);
          } else if ((args[0].startsWith('/') && !isMedia) || args[0].startsWith('!')) {
            tobz.reply(from, `Hanya menerima perintah dengan prefix ${prefix}`, id);
          }
        //await tobz.sendSeen(from)
      }
    }
  } catch (err) {
    console.log(color('[ERROR]', 'red'), err);
    //tobz.kill().then(a => console.log(a))
  }
};
