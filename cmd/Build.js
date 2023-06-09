/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const { Build } = require('@oawu/core')
const { main: Queue } = require('@oawu/queue')

Queue
  .enqueue(Build.Start)
  .enqueue(Build.Check)
  .enqueue(Build.Compile)
  .enqueue(Build.Export)
  .enqueue(Build.Finish)
