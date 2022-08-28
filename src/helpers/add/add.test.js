const add = require( './add' );

test( "add", () => {
    expect( add( 3, 2 ) ).toBe( 5 );
} );