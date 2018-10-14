import {} from 'jasmine';

function validText(text) {
    if (text.length === 0) {
      return false;
    } else {
      let input = Number(text)
      return Number.isInteger(input)
    }
  }

describe('#validText', () => { 

    it('returns false when an empty string is passed in', () => { 
      expect(validText('')) 
          .toEqual(false); 
    });

    it('returns true when a number is passed in', () => { 
        expect(validText('54')) 
            .toEqual(true); 
      });

      it('returns false when an alphanumeric string is passed in', () => { 
        expect(validText('a number')) 
            .toEqual(false); 
      });
  });