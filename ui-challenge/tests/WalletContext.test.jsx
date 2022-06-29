import {
  getHealthDataBlockchainTest,
  addSurveyBlockchainTest,
  registerUserBlockchainTest
} from "../src/context/helpers/WalletHelpers"

describe('Testing contract comunication', () => {

  test('should return an arrangement with the survey responses.',  async() => {
    const {result}  = await getHealthDataBlockchainTest();
    expect(result.length).toBeGreaterThan(0);
  });

  test('should register a new user with level 1 ', async() => {
    const {result}  = await registerUserBlockchainTest(1);
    expect(result).not.toBe(null);
  });

  test('should add a new survey response',  async() => {
    const {result}  = await addSurveyBlockchainTest("one,one");
    expect(result).not.toBe(null);
  });



});

