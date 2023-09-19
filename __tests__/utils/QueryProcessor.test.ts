import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrewid', () => {
        const query = "andrewid";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "krutikak"
          ));
    });

    test('should answer name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "tika5"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should find largest number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 84, 67, 19?")).toEqual("84");
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 2, 3?")).toEqual("3");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 2?")).toEqual("10");
        expect(QueryProcessor("What is 8 multiplied by 3?")).toEqual("24");
    });

    test('should check cube/square numbers', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 17, 64, 2, 4, 5, 78, 13?")).toEqual("64");
    });
});