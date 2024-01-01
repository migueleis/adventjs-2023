/*function drawGift(size, symbol) {

    const convertToDraw = (matrix) => {
        let draw = '';
        for (let i = 0; i < matrix.length; i++) {
            draw += matrix[i].join('').concat('\n');
        }
        return draw;
    }

    const drawSpacesBegin = (row, amount) => {
        for (let i = 0; i < amount; i++) {
            row[i] = ' ';
        }
        return row
    }

    const reduceArray = (row, pos) => {
        return row.splice(pos);
    }

    const drawSymbol = (row, amount, from, symbol) => {
        for (let i = 0; i < amount; i++) {
            row[from + i] = symbol;
        }
        return row
    }

    let draw = '#\n';
    if (size > 1) {
        const innerSize = size - 1;
        const fullSize = size + innerSize;
        let matrix = Array.from(Array(fullSize), () => Array(fullSize).fill('#'));
        for (let i = 0; i < fullSize; i++) {
            if (i < innerSize) {
                matrix[i] = drawSpacesBegin(matrix[i], innerSize - i);
                if (i > 0 && size > 2) {
                    matrix[i] = drawSymbol(matrix[i], size - 2, size - i, symbol);
                    if (i > 1) {
                        matrix[i] = drawSymbol(matrix[i], i - 1, matrix[i].length - i, symbol);
                    }
                }
            } else if (i > innerSize) {
                matrix[i] = reduceArray(matrix[i], i - innerSize);
                if (i < fullSize - 1 && size > 2) {
                    matrix[i] = drawSymbol(matrix[i], size - 2, 1, symbol);
                    if (i < fullSize - 2) {
                        matrix[i] = drawSymbol(matrix[i], fullSize - 2 - i, size, symbol);
                    }
                }
            } else if (i === innerSize) {
                matrix[i] = drawSymbol(matrix[i], size - 2, i + 1, symbol);
            }
        }
        draw = convertToDraw(matrix);
    }
    return draw;
}*/

function drawGift(size, symbol) {
    if (size === 1) {
        return '#\n';
    }
    const innerSize = size - 1;
    //top 
    let draw = ' '.repeat(size - 1);
    draw += '#'.repeat(size);
    draw += '\n';
    //intermediate
    for (let i = 1; i < innerSize; i++) {
        draw += ' '.repeat(innerSize - i);
        draw += '#'.repeat(1);
        draw += symbol.repeat(size - 2);
        draw += '#'.repeat(1);
        draw += symbol.repeat(i - 1);
        draw += '#'.repeat(1);
        draw += '\n';
    }
    //center
    draw += '#'.repeat(size);
    draw += symbol.repeat(size - 2);
    draw += '#';
    draw += '\n';
    //intermediate
    for (let i = innerSize; i > 1; i--) {
        draw += '#'.repeat(1);
        draw += symbol.repeat(size - 2);
        draw += '#'.repeat(1);
        draw += symbol.repeat(i - 2);
        draw += '#'.repeat(1);
        draw += '\n';
    }
    //bottom
    draw += '#'.repeat(size);
    draw += '\n';
    return draw;
}

console.log(drawGift(5, '+'));

/* 2
 ## 
###
##
*/

/* 3
  ### 
 #*##
###*#
#*##  5 - 3 = 1
###   5 - 4 = 2
*/

/* 4
   #### 70
  #++## 71
 #++#+# 72
####++# 73
#++#+#  7-4 = 1
#++##   7-5 = 2
####    7-6 = 3
*/

/* 5
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

