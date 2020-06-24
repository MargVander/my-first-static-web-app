import Partie from './Partie'

it('constructor Partie', () =>{
    expect(new Partie()).not.toBeNaN();
    expect(typeof new Partie().getNom).toBe('string');
})

