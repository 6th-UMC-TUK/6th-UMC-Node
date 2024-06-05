export const response = ({isSuccess, code, message}, result) => {
    return {
        isSuccess: isSuccess ?? "undefined",
        code: code,
        message: message,
        result: result
    }
};