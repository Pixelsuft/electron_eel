from eel import init as eel_init
from eel import start as eel_start
from eel import expose as eel_expose
from os import startfile as run_prog
from os import name as os_type


@eel_expose
def calculate(nums):
    result=''
    try:
        result=eval(str(nums))
    except:
        result='ERROR!'
    print(str(nums)+'='+str(result))
    return str(result)


if os_type=='nt':
    eel_init('src')
    if __name__=='__main__':
        run_prog('run.vbs')
        eel_start('index.html', mode=None, port=1337)
else:
    print('This example is only for windows!')