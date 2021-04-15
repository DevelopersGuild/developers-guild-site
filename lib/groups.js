import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const groupsDirectory = path.join(process.cwd(), 'groups');

export const getAllGroupIds = () => {
  const fileNames = fs.readdirSync(groupsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        group: fileName.replace(/\.md$/, '')
      }
    }
  })
}

// return a markdown group's metadata, HTML content
export const getGroupData = async (group) => {
  const fullPath = path.join(groupsDirectory, `${group}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  // parse metadata with gray-matter
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const HtmlContent = processedContent.toString();

  return {
    group,
    HtmlContent,
    ...matterResult.data
  }
}