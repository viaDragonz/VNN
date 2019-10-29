## /info
`VNN's Bot API API`
## /bans
List all bans on record.

### Usage
`/bans?userid=(userid)`

**Returns** 
* userid
* modid
* banid
* reason
* date 
* success

## /kicks
List all kicks on record.

`/kicks?userid=(userid)`

**Returns** 
* userid
* modid
* kickid
* reason
* date 
* success

## /warns
List all warnings on record.

`/wanrs?userid=(userid)`

**Returns** 
* userid
* modid
* warningid
* reason
* date 
* success

## /mutes
List all mutes on record.

`/mutes?userid=(userid)`

**Returns** 
* userid
* modid
* muteid
* reason
* date 
* success

# Error codes
* 1300 - No results found.
* 1200 - API endpoint under maintenance. 
* 1100 - You did not provide a user ID.
**All errors will return "success":"false"**
