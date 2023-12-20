// Utils for create result json
export const makeSuccessResponse = (incomeObj: Record<string, string>) => {
    return JSON.stringify(incomeObj);
}

export const getSumTwoNums = (num1: string, num2: string) => {
    return parseFloat(num1) + parseFloat(num2);
}
