function filterArray(arr, shouldDelete) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        // Если shouldDelete возвращает false, добавляем элемент в результат
        if (!shouldDelete(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}