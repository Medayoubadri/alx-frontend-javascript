// Create the interfaces and type aliases with nominal typing
interface MajorCredits {
  _brand: "MajorCredits";
  credits: number;
}

interface MinorCredits {
  _brand: "MinorCredits";
  credits: number;
}

// Functions to handle credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    _brand: "MajorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    _brand: "MinorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

// Example usage
const majorSubject1: MajorCredits = {
  _brand: "MajorCredits",
  credits: 3,
};

const majorSubject2: MajorCredits = {
  _brand: "MajorCredits",
  credits: 4,
};

const minorSubject1: MinorCredits = {
  _brand: "MinorCredits",
  credits: 1,
};

const minorSubject2: MinorCredits = {
  _brand: "MinorCredits",
  credits: 2,
};

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // { _brand: 'MajorCredits', credits: 7 }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // { _brand: 'MinorCredits', credits: 3 }
