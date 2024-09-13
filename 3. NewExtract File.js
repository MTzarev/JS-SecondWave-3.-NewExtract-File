function extractFile(input) {
    let strings = input.split(`\\`);
    let searched = strings[strings.length - 1];
    let idx = searched.lastIndexOf(`.`);
    let fileName = searched.slice(0, idx);
    let extension = searched.slice(idx + 1, searched.length);

    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
