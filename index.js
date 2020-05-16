function takeANumber(line, name)
{
  line.push(name)
  return "Welcome, "+name+". You are number "+line.length+" in line."
}

function nowServing(line)
{
  var currentlyServed = line.shift()
  if (typeof currentlyServed === 'undefined')
    return "There is nobody waiting to be served!"
  else
    return "Currently serving " + currentlyServed +"."
}