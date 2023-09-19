export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "krutikak"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "tika5"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largestMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestMatch) {
    const x: number = parseInt(largestMatch[1]);
    const y: number = parseInt(largestMatch[2]);
    const z: number = parseInt(largestMatch[3]);
    return Math.max(x,y,z).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }

  const squareCube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (squareCube) {
    const l: number[] = []
    const r: number[] = []
    l.push(parseInt(squareCube[1]));
    l.push(parseInt(squareCube[2]));
    l.push(parseInt(squareCube[3]));
    l.push(parseInt(squareCube[4]));
    l.push(parseInt(squareCube[5]));
    l.push(parseInt(squareCube[6]));
    l.push(parseInt(squareCube[7]));
    for (let i = 0; i < l.length; i++) {
      if(Math.sqrt(l[i]) % 1 == 0 && Math.cbrt(l[i]) % 1 == 0){
        r.push(l[i])
      }
    }
    return r.toString();

  }

  return "";
}
