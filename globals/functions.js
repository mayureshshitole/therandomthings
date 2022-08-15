const copyText = (copytext) => {
 try {
    navigator.clipboard.writeText(copytext)
  
 } catch (error) {
    console.log(error)
 }
};

module.exports = { copyText };
