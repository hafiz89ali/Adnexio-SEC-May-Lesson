// whatsapp link generator

const fs = require("fs");

const csvData = fs.readFileSync("./input/contacts.csv", "utf-8");
console.log(csvData);

// output = [{name: "name", contact: "contact"}]
const csvToJson = (csvData) => {
  const lines = csvData.split("\n");
  console.log("This is the 'lines': ", lines);
  console.log("This is the 'lines length': ", lines.length);

  const result = [];
  console.log("\nThis is the 'result':", result);

  const headers = lines[0].split(",");
  console.log("\nThis is the 'headers':", headers);

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};

const contacts = csvToJson(csvData);
console.log("\nThis is the 'contacts':", contacts);

const generateWhatsappLink = (tel, message) => {
  const baseUrl = "https://wa.me/";
  const url = `${baseUrl}/${tel}?text=${encodeURIComponent(message)}`;
  console.log("\nThis is the 'url':", url);
  return url;
};

// save to output file
let fileContent = "";
console.log("\nThis is the 'fileContent':", fileContent);

for (let i = 0; i < contacts.length; i++) {
  const contact = contacts[i];
  const link = generateWhatsappLink(
    contact.tel,
    `Hello ${contact.name}, how are you?`
  );
  fileContent += `${link}"\n"`;
  console.log("\nThis is the 'file content':", fileContent);
  console.log("\nThis is the 'link':", link);
}

fs.writeFile("./output/whatsapp-links.txt", fileContent, function (error) {
  if (error) {
    console.error("Error writing file");
  } else {
    console.log("File written successfully");
  }
});
