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

function currentLine(line)
{
  var res="The line is currently: "
  if(line.length===0)
    return "The line is currently empty."
  else
    for(let i=0; i<line.length; i++)
      res+=i+". "+line[i]+", "
  res.trimRight(2)
  return res
}