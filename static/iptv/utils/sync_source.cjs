const fs  = require('node:fs');
const path = require('node:path');

const axios = require('axios');


// 创建文件或者清理文件内容
const createFileOrClearContent = async (filePath) => {
  try {
    await fs.promises.access(filePath);
    // file exists, clear the content
    await fs.promises.truncate(filePath, 0);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // file not exists, create it
      await fs.promises.writeFile(filePath, '');
    } else {
      console.error('创建文件或者清理文件内容失败:', err);
    }
  }
}

const syncSource = async (targetFilePath, sourceFileLinkList) => {
  const writeStream = fs.createWriteStream(targetFilePath, { flags: 'a' });

  writeStream.write('#EXTM3U\n');

  for (const sourceFileLink of sourceFileLinkList) {
    try {
      const response = await axios.get(sourceFileLink);
      const lines = response.data.split('\n');
      for (const line of lines) {
        if (line.startsWith('#EXTM3U') || line.trim() === '') {
          continue;
        }
        writeStream.write(`${line}\n`);
      }
    } catch (err) {
      console.error(`从链接 ${sourceFileLink} 下载文件失败:`, error);
    }
  }

  // 所有文件内容都写入完成后关闭写入流
  writeStream.end();
}

const main = async () => {
  // 目标文件路径
  const targetFilePath = path.resolve(__dirname, '../index.m3u');

  // 直播源文件下载列表
  const sourceFileLinkList = [
    // 国内直播，有珠江台
    'https://live.zbds.top/tv/iptv6.m3u',
    // 港澳直播，有翡翠台
    'https://aktv.top/live.m3u',
  ];

  await createFileOrClearContent(targetFilePath);
  await syncSource(targetFilePath, sourceFileLinkList);
}

main();