## Dang kí/ đăng nhập để lấy token

### Endpoint

- POST http://localhost:3000/api/auth/register

```json
{
  "email": "x@gmail.com",
  "password": "123",
  "full_name": "Xuân"
}
```

- POST http://localhost:3000/api/auth/login

```json
{
  "email": "x@gmail.com",
  "password": "123",
  "full_name": "Xuân"
}
```

## Danh sach API

## Like nha hang

- POST http://localhost:3000/api/likes/restaurants/:resId

## Unlike nha hang

- DELETE http://localhost:3000/api/likes/restaurants/:resId

## Lay danh sach like theo nha hang

- GET http://localhost:3000/api/likes/restaurants/:resId?page=1&pageSize=10

## Lay danh sach nha hang da like theo user bất kì

- GET http://localhost:3000/api/likes/users/:userId/restaurants?page=1&pageSize=10

## Lay danh sach nha hang da like theo user đang đăng nhập

- GET http://localhost:3000/api/likes/me/restaurants?page=1&pageSize=10

## Danh gia nha hang

## Them hoac cap nhat danh gia nha hang

- POST http://localhost:3000/api/rates/restaurants/:resId

```json
{
  "amount": 5
}
```

## Lay danh sach danh gia theo nha hang

- GET http://localhost:3000/api/rates/restaurants/:resId?page=1&pageSize=10

## Lay danh sach nha hang da danh gia theo user bat ki

- GET http://localhost:3000/api/rates/users/:userId/restaurants?page=1&pageSize=10

## Lay danh sach nha hang da danh gia theo user dang dang nhap

- GET http://localhost:3000/api/rates/me/restaurants?page=1&pageSize=10

## Dat mon

## Them order

- POST http://localhost:3000/api/orders

```json
{
  "food_id": 1,
  "amount": 2,
  "arr_sub_id": "1,2"
}
```
