import logging

def configure_logging(name):
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(levelname)s: %(message)s')
    default_handler = logging.StreamHandler()
    default_handler.setFormatter(formatter)
    logger.addHandler(default_handler)
    logger.propagate = False
    return logger
