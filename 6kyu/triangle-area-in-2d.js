/*jshint esversion:6*/
function triangleArea(triangle) {
    let distances = calculateDistances(triangle);
    let semiPerimeter = calculateSemiPerimeter(distances);
    let area = calculateArea(distances, semiPerimeter);
    return area;
}

const calculateDistances = (triangle) => {
    let distances = [];
    //Distance AB
    let ab = calculteDistanceBetween2Points(triangle.b, triangle.a);
    //Distance AC
    let ac = calculteDistanceBetween2Points(triangle.c, triangle.a);
    //Distance BC
    let bc = calculteDistanceBetween2Points(triangle.c, triangle.b);

    distances.push(ab);
    distances.push(ac);
    distances.push(bc);

    return distances;
};

const calculateArea = (distances, semiPerimeter) => {
    return Math.sqrt(semiPerimeter * (semiPerimeter - distances[0]) * (semiPerimeter - distances[1]) * (semiPerimeter - distances[2]));
};

const calculateSemiPerimeter = (distances) => {
    return distances[0] + distances[1] + distances[2];
};

const calculteDistanceBetween2Points = (point1, point2) => {
    return Math.sqrt((point2.x - point1.x) * (point2.x - point1.x) + (point2.y - point1.y) * (point2.y - point1.y));
};

// const calculateHeight = (ac, bc) => {
//     return Math.sqrt(ac * ac - bc * bc);
// };
//d² + (bc/2)² = ab²
//d = sqrt(ab² - (bc/2)²)
//console.log(calculteDistanceBetween2Points({x:60,y:10},{x:50,y:10}));

console.log(triangleArea({
    a: {
        x: 10,
        y: 10
    },
    b: {
        x: 40,
        y: 10
    },
    c: {
        x: 10,
        y: 50
    }
}));
