import fs from "fs";
import Chapter from "../model/chapter";
import ChapterContent from "../model/chapter-content";

function countFilesAndDirs(dirPath) {
  let files = 0;
  let dirs = 0;

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      dirs++;
    } else if (item.isFile()) {
      files++;
    }
  }

  return files;
}

async function create() {
  try {
    for (let i = 1; i <= 54; i++) {
      console.log(i);

      let data = {
        story: "664c53b781610d67a409404c",
        title: `Chapter ${i}`,
      };
      const chapter = await Chapter.create(data);

      const partFolder = `images/chapter-${i}`;
      const lengthFolder = countFilesAndDirs(partFolder);
      const images = [];

      for (let j = 1; j <= lengthFolder; j++) {
        const name = j < 10 ? `0${j}` : j;
        images.push(`marriage-agency-review/chapter-${i}/${name}.jpg`);
      }

      await ChapterContent.create({
        chapter: chapter._id,
        images,
      });
    }
    console.log("done");
  } catch (error) {}
}
