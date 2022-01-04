module.exports = function toReadable(number) {
   let nums = String(number);

   let singleDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let doubleDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

   if (number === 0) {
      return 'zero';
   }

   if (number < 10) {
      return singleDigits[nums[0] - 1];
   } else if (number >= 10 && number < 20) {
      return doubleDigits[nums[1]];
   } else if (number >= 20 && number < 100 && number % 10 === 0) {
      return dozens[nums[0] - 2];
   } else if (number >= 20 && number < 100) {
      return `${dozens[nums[0] - 2]} ${singleDigits[nums[1] - 1]}`;
   } else if (number >= 100 && number % 100 === 0) {
      return hundreds[nums[0] - 1];
   } else if (number >= 100 && number % 10 === 0 && number % 100 != 10) {
      return `${hundreds[nums[0] - 1]} ${dozens[nums[1] - 2]}`;
   } else if (number > 100 && number % 100 < 20 && number % 100 >= 10) {
      return `${hundreds[nums[0] - 1]} ${doubleDigits[nums[2]]}`;
   } else if (number > 100 && number % 100 < 10) {
      return `${hundreds[nums[0] - 1]} ${singleDigits[nums[2] - 1]}`;
   } else if (number > 100) {
      return `${hundreds[nums[0] - 1]} ${dozens[nums[1] - 2]} ${singleDigits[nums[2] - 1]}`
   }


}
