INSERT INTO buckets (
	user_id, 
	name, 
	current_amount, 
	goal_amount
	)
VALUES 
	( $1, $2, $3, $4 );

RETURNING * FROM buckets
WHERE user_id = $1;