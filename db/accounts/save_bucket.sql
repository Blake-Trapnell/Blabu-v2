INSERT INTO buckets (
    user_id,
    name,
    type,
    payment_type,
    current_amount,
    goal_amount,
    t_stamp
)
VALUES
($1, $2, $3, $4, $5, $6, $7);