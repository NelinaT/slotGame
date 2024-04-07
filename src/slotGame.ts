interface Defaults {
	reelsCount: number;
	rowsCount: number;
	
	symbols: {[index: number]: Array<number>;}
	lines: Array<Array<number>>;
	reels: Array<Array<number>>;
}

interface LineSymbols {
	[index:number]: number;
}

interface Result {
	position: Array<Array<number>>;
	symbols: Array<Array<number>>;
	linesPayout: Array<number>;
	totalWinnings: number;
}

// set the configurations as constant 
const defaults: Defaults = {
	reelsCount: 5,
	rowsCount: 3,
  
	symbols: {
	  1: [0, 0, 10, 20, 50],
	  2: [0, 0, 20, 40, 100],
	  3: [0, 0, 30, 60, 150],
	  4: [0, 0, 40, 80, 200],
	  5: [0, 0, 50, 100, 250],
	  6: [0, 0, 100, 200, 500],
	  7: [0, 0, 150, 300, 800],
	  8: [0, 0, 200, 400, 1000],
	  9: [0, 0, 300, 600, 2000],
	},
  
	lines: [
	  [0, 0, 0, 0, 0],
	  [1, 1, 1, 1, 1],
	  [2, 2, 2, 2, 2],
	  [0, 1, 0, 1, 0],
	  [1, 2, 1, 2, 1],
	],
  
	reels: [
	  [
		1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8, 8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1, 1,
		4, 4, 2, 2, 3, 3, 4, 4, 9, 9, 3, 3, 2, 2, 1, 1, 9, 9, 1, 1, 4, 4, 8, 8, 2, 2, 5, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3, 6,
		6, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 7, 7, 5, 5, 5, 1, 1, 6, 6, 4, 4, 3, 3, 4, 4, 5, 5, 3, 3, 2, 2, 1, 1, 1,
		1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8, 8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1, 1, 4,
		4, 2, 2,
	  ],
	  [
		1, 1, 5, 5, 3, 3, 1, 1, 7, 7, 7, 4, 4, 9, 9, 5, 5, 1, 1, 4, 4, 9, 9, 3, 3, 6, 6, 7, 7, 2, 2, 6, 6, 6, 2, 2, 2, 3,
		3, 4, 4, 8, 8, 8, 3, 3, 2, 2, 1, 1, 4, 4, 1, 1, 8, 8, 2, 2, 5, 5, 1, 1, 5, 5, 9, 9, 3, 3, 1, 1, 7, 7, 4, 4, 5, 5,
		1, 1, 4, 4, 4, 4, 3, 3, 6, 6, 7, 7, 2, 2, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5, 6,
		6, 2, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5,
	  ],
	  [
		1, 1, 9, 9, 2, 2, 2, 5, 5, 8, 8, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4,
		4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3, 3, 2, 2, 9, 9, 1, 1, 1, 1, 2, 2, 2, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7, 7,
		2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4, 4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1, 6, 6, 6,
		1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4, 4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1,
	  ],
	  [
		1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 9, 9, 9, 2, 2, 2, 5, 5, 7, 7, 2, 2, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 6, 1, 1,
		4, 4, 4, 5, 5, 5, 1, 1, 4, 4, 8, 8, 3, 3, 6, 6, 2, 2, 1, 1, 9, 9, 1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 2, 2, 2, 5, 5, 5,
		7, 7, 2, 2, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1, 1, 7, 7, 5, 5, 1, 1, 4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1, 9, 9,
		3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1, 1, 7, 7, 5, 5, 1, 1, 4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1,
	  ],
	  [
		1, 1, 5, 5, 7, 7, 3, 3, 9, 9, 9, 1, 1, 3, 3, 2, 2, 2, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 4, 4, 4,
		5, 5, 1, 1, 6, 6, 4, 4, 8, 8, 3, 3, 6, 6, 2, 2, 1, 1, 8, 8, 1, 1, 5, 5, 3, 3, 9, 9, 1, 1, 7, 7, 3, 3, 2, 2, 2, 5,
		5, 1, 1, 7, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 5, 5, 1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1,
		1, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 5, 5, 1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1,
	  ],
	],
};



class Slot{
    // function that generates randomly the positions of each reel
    positionGenerator() {
        let positions : any = [];

        for (let i=0; i<defaults.reelsCount; i++) {

            let index = Math.floor(Math.random() * defaults.reels[i].length);

            // once the position is chosen, next 2 should be shown as well
            positions[i] = [index++];

            if (index === defaults.reels[i].length) {
                index = 0;
            } 

            positions[i].push(index++);
            positions[i].push(index === defaults.reels[i].length ? 0: index); 
        }

        return positions; 
    };

    //function that converts the choosen position into the relevant symbols 
    convertPositionToSymbols(positions: any) {
        let symbols : any = []

        for (let i=0; i<positions.length; i++) {
            symbols[i] = [];
            for(let j=0; j<positions[i].length; j++){
                symbols[i].push(defaults.reels[i][positions[i][j]]);
            }
        }
        return symbols
    };

    // function that counts duplications
    getCountOfEachElementinArray(index:number, symbols:any) {
        let lineSymbols: LineSymbols = {};

        for(let j=0; j<defaults.lines[index].length; j++) {
            let lineSymbol:number = symbols[j][defaults.lines[index][j]]; //takes a specipic element for the lines

            if (lineSymbols[lineSymbol]) {
                lineSymbols[lineSymbol]++;
            } 
            else {
                lineSymbols[lineSymbol] = 1;
            }
        }
        return lineSymbols
    }

    checkWinnings(lineSymbols: LineSymbols, linesPayout: Array<number>) {
        let keys = Object.keys(lineSymbols);
        let elementIsAdded = false;
        let totalWinnings = 0;

        keys.forEach(key => {
            if (lineSymbols[Number(key)] > 2) {
                linesPayout.push(defaults.symbols[Number(key)][lineSymbols[Number(key)]-1]); // -1 because default.symbols starts form 0 while lineSymbols from 1
                elementIsAdded = true;
            }
        });

        if (elementIsAdded) {
            totalWinnings = linesPayout[linesPayout.length - 1];
        }
        else {
            linesPayout.push(0);
        }

        return totalWinnings
    }
      
    spin() {
        let linesPayout: Array<number> = [];
        let totalWinnings = 0;

        let positions: Array<Array<number>> = this.positionGenerator();
        let symbols: Array<Array<number>> = this.convertPositionToSymbols(positions);

        for (let i=0; i<defaults.lines.length; i++) {
            let lineSymbols = this.getCountOfEachElementinArray(i,symbols);
            totalWinnings += this.checkWinnings(lineSymbols, linesPayout);
        }

        let result : Result = {
            position:positions,
            symbols:symbols,
            linesPayout:linesPayout,
            totalWinnings: totalWinnings
        };
        
        
        return result;
    };
    
};

const gameSLot = new Slot();
console.log(gameSLot.spin());