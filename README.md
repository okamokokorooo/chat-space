# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, 
index: true|
|e-mail|string|null: false|
|password|string|null: false|

### Association
- has_many :groups through: :members

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- has_many :messages
- belongs_to :user

### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,
index: true|
|member_id|integer||null: false, foreign_key: true|
|user_id|integer|null: false,foreign_key: true|

### Association
- has_many :users, through: :members

#messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references||null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

