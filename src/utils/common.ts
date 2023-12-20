// Utils for create result json
export const makeSuccessResponse = (incomeObj: Record<string, string>) => {
    return JSON.stringify(incomeObj);
}