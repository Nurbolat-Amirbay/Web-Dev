if (-1 || 0) alert( 'first' ); // truthy, runs

if (-1 && 0) alert( 'second' ); // falsy, doesn't run

if (null || -1 && 1) alert( 'third' ); // runs, because operator && has a higher precedence than || so -1 && 1 executes first, giving us the chain: null || -1 && 1  ->  null || 1  ->  1