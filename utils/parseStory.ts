const pairOffElements = (array: string[]) => {
    const pairs = [];
  
    for (let i = 0; i < array.length - 1; i += 2) {
      const pair = [array[i], array[i + 1]]
      pairs.push(pair.join(''))
    }
  
    return pairs;
}

export const parseStory = (initialStory: string) => {
    const splitStory = initialStory.split('\n')

    // Title: Some Title Format
    const title = splitStory[0].split(': ')[1] 

    // Some-Tite-Format (removing non-alphanumeric values, except hyphens)
    const titleHyphenated = title.replace(/ /g, '-').replace(/[^A-Za-z0-9\-]/g, '')
    
    // skipping the title and the first \n
    const content = splitStory.slice(2).join('\n')

    // skipping the title and the first \n
    let contentArray = splitStory.slice(2).filter(e => e.length > 0) // excluding ''
    contentArray = pairOffElements(contentArray) // only needed to reduce API requests for now

    // TODO: redundant remove this - Use Each paragraph as an image prompt
    let imagePrompts = splitStory.slice(2).filter(e => e.length > 0) // excluding ''
    imagePrompts = pairOffElements(imagePrompts) // only needed to reduce API requests for now

    return { title, titleHyphenated, content, contentArray, imagePrompts }
}