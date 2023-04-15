import { readFileSync } from "fs";
import path from "path";

function day1(part: "p1" | "p2") {
    const data = readFileSync(path.resolve("./data", "day1.txt"), { encoding: 'utf-8' });

    const chars = data.split('');

    switch (part) {
        case "p1":
            const finalFloor = chars.reduce((acc, curr) => acc += curr === '(' ? 1 : -1, 0);
            console.log(`Final floor: ${finalFloor}`);

            return;
        case "p2":
            let indexOfMoveToBasement: number | null = null;
            let floor = 0;
            for (const [index, char] of chars.entries()) {
                floor += char === '(' ? 1 : -1;

                if (floor === -1) {
                    indexOfMoveToBasement = index + 1;
                    break;
                }
            }

            console.log(`Index of character that make move to basement: ${indexOfMoveToBasement}`);
            return;
    }
}


function main() {
    const args = process.argv;

    const day = args[2];
    const part = args[3];

    switch (day) {
        case "day1":
            switch (part) {
                case "p1":
                    day1(part)
                    break;
                case "p2":
                    day1(part)
                    break;
                default:
                    console.error("incorrect part for day1")
            }
            break;
        default:
            console.error("incorrect day value");
    }
}

main();